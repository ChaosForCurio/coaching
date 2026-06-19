import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Intercept navigation
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.isNavigationRequest() && request.url().includes('google.com/o/oauth2')) {
      console.log('Intercepted OAuth URL:', request.url());
      process.exit(0);
    }
    // Also log any requests to hexclave api
    if (request.url().includes('api.hexclave.com') || request.url().includes('stack-auth')) {
      console.log('API Request:', request.method(), request.url(), request.postData());
    }
    request.continue();
  });

  const url = `https://app.hexclave.com/handler/sign-in?project_id=d859fbe3-1844-4fc3-a830-323ae8adda0f&redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdashboard`;
  console.log("Navigating to:", url);
  await page.goto(url, { waitUntil: 'networkidle2' });

  console.log("Looking for Google button...");
  // Wait for Google button and click it
  await page.waitForFunction(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    return btns.find(b => b.innerText.includes('Google') || b.textContent.includes('Google'));
  });
  
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const gBtn = btns.find(b => b.innerText.includes('Google') || b.textContent.includes('Google'));
    if (gBtn) gBtn.click();
  });
  
  console.log("Clicked Google button, waiting for redirect...");
  await new Promise(r => setTimeout(r, 5000));
  await browser.close();
}
run().catch(console.error);
