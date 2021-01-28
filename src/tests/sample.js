const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Your Main suit Name', async () => {
    let driver
    before(async function () {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.manage().window().maximize();
    })
    after(async function () {
        await driver.quit();
    })
    afterEach(async function () {
        if (!this.currentTest.isPassed()) {
            //TODO Handle Test Failed Scnario
        }
    })
    it('TTS-Test Number', async () => {
        try {
            // Navigate to Url
            await driver.get('https://www.google.com');

            // Enter text "cheese" and perform keyboard action "Enter"
            await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

            let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

            console.log(await firstResult.getAttribute('textContent'));
            await driver.navigate().back(); 
        } catch (error) {
            await driver.emit('error', new Error(error))
        }
    })
})//end of You Main suit Name