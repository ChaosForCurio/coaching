import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import dotenv from 'dotenv';

dotenv.config();
let adminApp = null;
function getAdminApp() {
  if (adminApp) return adminApp;
  const existingApps = getApps();
  if (existingApps.length > 0) {
    adminApp = existingApps[0];
    return adminApp;
  }
  const projectId = process.env.FIREBASE_PROJECT_ID || "coaching-bhavya";
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-fbsvc@coaching-bhavya.iam.gserviceaccount.com";
  const privateKey = process.env.FIREBASE_PRIVATE_KEY || "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+7exAgkrYMPJ+\n4q5hkQyQfx2mid+4/etaFpGHueZ/t4avvkPz/8PL3duNUHSnTy1AdEgCxhSn468H\nOzP1XHYhYpr71+H3XIu7dOpIm2VCZvpEWKhM5BJFZwx1sR7z6uLGpAh8mEUs0Mb6\necv8XrDYN0NKS3zssWL8WVBiMDEjPk2+70ik7rUYoKXrJFfT/CUjoxg8PVt2w0L6\nEVY6bM3WrNJ4wjFEKkR0xQMHV0tWaNQKZlKHcPQksOMzxjH32dgf1IlJOcI3q6x8\nrEHyUN830xsgBKEsiGZWSEhmrByhl3HdSs18y0sL9niDSEE9vdv9oPMITO5V8Yqm\nJAyzHo+rAgMBAAECggEABUdmxNHVZ+zSh5eU4rWz9zrMgxJE0USUAUWmeG43ZUiZ\nvLox/skPjM9xhpK25vlVcvbEFu+LGqk86aJFaX9I9NtZFaV+Zex1IJW29JL3VcKr\nIMCixp13s9uJiKeBB5Vy97MJWQiMwRR0q/A6J5wmn5PHlIJJzfGJnxiJFG3oreS6\nxYEAoGkwH1KSFdGBTIk1qM6YLAOnT9c4fd1AgYy3ilcYArwDr8nEGgeA3IcktuWv\nl4/jVjT2/SroodXo0HqKR4U/j0NrkeJQWwCeP94iwbvi12qsvkCE5xJ4P8OGSi1C\nGFUj+TwgLWEiloBBut4kc/6DEw1hNqxkpk7PBnLkIQKBgQD7sUAMIVKhEfvx6TxZ\nGR/fGYTlNr3TmRKzkHxJ6xTQoMOJiR6mtPvgtxqhw+dBuC8OOS0xkZVqkSI6ucfg\nQczA75/jwGL/k3uLkjxaM+Wla0z8XnY5AE2tHOFqAWrtRXsDT4hbGMU/3841THsq\nqDO1BHoV9Vxie6uhyOXR6zQgBwKBgQDCMnMIUsC8XClOy7ZjmSnzPzQZyZ61Jarc\nrkfbUE0ZCOT/NkaE75yalimwYEIWU9sLt00QRqCYiI1GCk4xKW1WMNZmu9gOLvEV\nbWhhvcye+Vw4SPigjdEqTmZmRjR2UyILbskvXuxp5nZBAUcfL0VNqi5Xe/zxAHlu\napmXSH4iPQKBgEnGeOmVUu0XomwUW7YaITd5+XReiWHeupabwXLBT4afuPE1miBv\naG1D/rBwBfdDj7dxlweyjsN/6zKfhjD72JKtKobNu7cCefI9WSdvkt7cBuLqpWir\n6BjYIFK8O6V0+kvMIkHhjt/cMEt7MZcdWpqyxz5sfzn22iZABu1zLgI9AoGAPm8V\nyKFCUcyXgzu/QbomYIv7ZicKHVck3Zoyg/IHN3tClEKQ3YBjqteIQ6pO1PrUu6mM\n3yS10RRlxxTdGrUk78b3x0OxLK4u2CK6omHw/VNSMM5VENlHXACkr1D24OvNUDun\n9tDf1RRBBJkyknYSI+wIxhuYsKrkX3lqM9ccpkkCgYACbeqQnbId2MaoKcp7woPv\nWGdL2ATLmya9A3T5HKlNZedPGzwAFRkzCcqR2o6C+QabPUN2l4C6X3ZVYrkij1IF\ncFLgPCwym+9raXvHdT3fwWueQZbuIwiToldIi2mR5/6s6rhep9170951Vc+cxaxH\nX1BAsxFe6W7tagqrKZcONQ==\n-----END PRIVATE KEY-----\n";
  adminApp = initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      // Replace escaped newlines that can come from env var strings
      privateKey: privateKey.replace(/\\n/g, "\n")
    })
  });
  return adminApp;
}
async function verifyIdToken(token) {
  try {
    const auth = getAuth(getAdminApp());
    const decoded = await auth.verifyIdToken(token, true);
    return decoded;
  } catch (err) {
    console.error("[firebaseAdmin] Token verification failed:", err);
    return null;
  }
}

export { verifyIdToken as v };
