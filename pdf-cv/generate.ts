import puppeteer from "puppeteer";
import path from "path";

const URL = "http://localhost:3000/cv";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  await page.pdf({
    path: path.join(__dirname, "cv.pdf"),
    scale: 0.51,
    format: "a4",
  });
  await browser.close();
})();
