import { chromium } from "@playwright/test";
//import  CsvWriter  from "csv-writer";
const CsvWriter = require('csv-writer');


export class Utils {
    static page;

    static async setBrowser() {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        this.page = await context.newPage();
    }

    static async wait(milliseconds) {
        await new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    static async verifyElementIsPresent(selector) {
        await this.page.waitForSelector(selector, { state: "attached"});
    }

    static async navigateTo(url){
        await this.page.goto(url);
    }

    static async writeArraysToCsv(postNames, postLinks, postPoints, postComments, filename) {
        const data = postNames.map((_, i) => ({
          name: postNames[i],
          link: postLinks[i],
          points: postPoints[i],
          comments: postComments[i],
        }));
    
        const writer = CsvWriter.createObjectCsvWriter({
          path: filename,
          header: [
            { id: 'name', title: 'POST NAME' },
            { id: 'link', title: 'POST LINK' },
            { id: 'points', title: 'POST POINTS' },
            { id: 'comments', title: 'POST COMMENTS' },
          ],
        });
    
        await writer.writeRecords(data);
      }
}