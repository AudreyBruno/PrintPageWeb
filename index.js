const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  rl.question('Digite o endereço que deseja acessar: ', async (address) => {
    rl.question('Digite o nome do arquivo de captura de tela: ', async (filename) => {
      rl.question('Escolha a resolução (mobile, tablet, desktop): ', async (resolution) => {
        const resolutions = {
          mobile: { width: 375, height: 667 },
          tablet: { width: 768, height: 1024 },
          desktop: { width: 1920, height: 1080 },
        };
  
        if (resolutions[resolution]) {
          const { width, height } = resolutions[resolution];
          await page.setViewport({ width, height });
          await page.goto(address);
          await page.screenshot({ path: `${filename}_${resolution}.png` });
          await browser.close();
          rl.close();
        } else {
          console.log('Resolução não reconhecida. Escolha entre mobile, tablet ou desktop.');
          await browser.close();
          rl.close();
        }
      });
    });
  });
})();