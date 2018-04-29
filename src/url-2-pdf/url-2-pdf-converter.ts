import * as puppeteer from 'puppeteer';

class Url2PdfConverter {

  browser: puppeteer.Browser;

  constructor() {
  }

  async init() {
    this.browser = await puppeteer.launch();
  }

  async convert(url): Promise<Buffer>{
    const page = await this.browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.emulateMedia('screen');
    return await page.pdf({ format: 'A4' });
  }

  async close() {
    await this.browser.close();
  }
}