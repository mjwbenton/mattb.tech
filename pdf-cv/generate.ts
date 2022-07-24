import puppeteer from "puppeteer";
import path from "path";

const URL = "http://localhost:3000/cv";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  await page.pdf({
    path: path.join(__dirname, "cv.pdf"),
    scale: 0.75,
    margin: {
      top: "1cm",
      left: "1cm",
      bottom: "1cm",
      right: "1cm",
    },
    format: "a4",
  });
  await browser.close();
})();
