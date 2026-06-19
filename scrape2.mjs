import fs from 'fs';

async function run() {
  try {
    const projectId = "d859fbe3-1844-4fc3-a830-323ae8adda0f";
    const redirectUrl = "http://localhost:3000/dashboard";
    const url = `https://app.hexclave.com/handler/sign-in?project_id=${projectId}&redirect_url=${encodeURIComponent(redirectUrl)}`;
    
    console.log("Fetching URL:", url);
    const res = await fetch(url);
    const text = await res.text();
    
    // Write out the text to a file so we can read it
    fs.writeFileSync('hexclave_signin.html', text);
    console.log("Saved to hexclave_signin.html");
  } catch (err) {
    console.error(err);
  }
}
run();
