import * as puppeteer from 'puppeteer';

export class Url2PdfController {

  constructor() {
  }

  async convert(url): Promise<Buffer>{
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.emulateMedia('screen');
    let buffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();
    return buffer;
  }

}