import { launch } from "puppeteer";

const URL_CONNECTION = "https://adventofcode.com/2023/auth/github";
const PREDIX_URL = "https://adventofcode.com/2023/day/";
const SUFFIX_URL = "/input";

// function parseData(text: string | null): any {
//   if (!text) {
//     return null;
//   }
//   const games = text.trim().split("\n");
//   const result = {};

//   games.forEach((game) => {
//     const [gameTitle, gameData] = game.split(": ");
//     result[gameTitle.trim()] = gameData.split("; ").map((item) => {
//       const parts = item.split(", ").map((part) => {
//         const [quantity, color] = part.split(" ");
//         return { quantity: parseInt(quantity, 10), color };
//       });
//       return parts;
//     });
//   });

//   return result;
// }

const getDataOfDay = async (day: number) => {
  const browser = await launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL_CONNECTION);

  await page.waitForNavigation(); // Login
  await page.waitForNavigation(); // 2FA
  await page.waitForNavigation(); // redir
  await new Promise((r) => setTimeout(r, 1000));

  await page.goto(PREDIX_URL + day + SUFFIX_URL);

  const bodyText = await page.evaluate(() => {
    const preElement = document.querySelector("pre");
    return preElement ? preElement.textContent : "";
  });

  // const content = await page.content();
  // console.log(content);
  // return content;

  // console.log(bodyText);

  const result = bodyText?.trim().split("\n");
  // console.log(result);
  // const jsonData = parseData(bodyText);
  const reslt2 = JSON.stringify(result, null, 2);
  // console.log(reslt2);

  await browser.close();
  return reslt2;
};

export { getDataOfDay };
