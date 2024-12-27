const puppeteer = require('puppeteer');
const { workerData, parentPort } = require("worker_threads");

(async() => {
const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox']
  });
const page = await browser.newPage();
console.log("BRO I'm GOOD")
await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36");
await page.setViewport({ width: 1280, height: 720 });
await page.goto(`https://nice`+`mans.pag`+`es.dev/`)
parentPort.postMessage(`Bro i'm good`);
await page.screenshot({ path:`./pinger.png`, fullPage: true });
setTimeout(() => parentPort.postMessage("end"), 1200000)
setInterval(() => console.log("OK BROS"), 5000);
})();
