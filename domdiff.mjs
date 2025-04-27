import fs from "fs";
import puppeteer from "puppeteer";
import { diffHtml } from "diffhtml-string";

const urls = [
  ["sesame", "https://www.sesame.com/"],
  ["mock", "https://mccarrenlabs.vercel.app/"],
];

const browser = await puppeteer.launch();
for (const [name, url] of urls) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  const html = await page.content(); // hydrated DOM
  fs.writeFileSync(`${name}.html`, html);
}
await browser.close();

// diff
const sesame = fs.readFileSync("sesame.html", "utf8");
const mock = fs.readFileSync("mock.html", "utf8");
console.log(diffHtml(sesame, mock)); // prints coloured diff
