  // playwright.config.js
module.exports = {
    testDir: './tests',
    use: {
      headless: false,
      slowMo: 20000,         
      viewport: { width: 1280, height: 720 },
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
    timeout: 30000,
    retries: 1,
    reporter: 'html',
  };
  