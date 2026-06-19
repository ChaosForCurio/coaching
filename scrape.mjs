import fs from 'fs';

async function run() {
  try {
    const projectId = "d859fbe3-1844-4fc3-a830-323ae8adda0f"; // from the user's screenshot
    const redirectUrl = "http://localhost:3000/dashboard"; // arbitrary
    const url = `https://app.hexclave.com/handler/sign-in?project_id=${projectId}&redirect_url=${encodeURIComponent(redirectUrl)}`;
    
    console.log("Fetching URL:", url);
    const res = await fetch(url);
    const text = await res.text();
    
    // Search for google oauth url
    const matches = text.match(/href="([^"]*google[^"]*)"/gi);
    if (matches) {
      console.log("Found matches:", matches);
    } else {
      console.log("No Google matches found in hrefs");
      // Let's look for anything with oauth
      const oauthMatches = text.match(/href="([^"]*oauth[^"]*)"/gi);
      console.log("OAuth matches:", oauthMatches);
    }
  } catch (err) {
    console.error(err);
  }
}
run();
