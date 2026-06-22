import type { APIRoute } from "astro";
import { db } from "../../db";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { uid, email, role, name } = body;

    if (!uid || !email || !role) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // Default name if none is provided
    const userName = name || email.split("@")[0];

    // Check if user already exists (just in case)
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);

    if (existingUser.length > 0) {
      // If the user already exists (e.g. from a previous login system), 
      // just link the new Firebase UID to their existing account.
      await db.update(users)
        .set({ firebase_uid: uid })
        .where(eq(users.id, existingUser[0].id));
        
      return new Response(JSON.stringify({ success: true, message: "User linked" }), { status: 200 });
    }

    // Insert new user into Supabase
    await db.insert(users).values({
      firebase_uid: uid,
      email: email,
      name: userName,
      role: role.toUpperCase(), // Schema enum is 'STUDENT' or 'TEACHER'
      // password_hash is now optional in schema, so we don't need to provide it
    });

    return new Response(JSON.stringify({ success: true, message: "User saved" }), { status: 200 });

  } catch (error: any) {
    console.error("Error saving user:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
