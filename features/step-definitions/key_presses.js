const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the {string} page', async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When('I press a {}', async (key) => {
    await $('//*[@id="target"]');
});

Then('I should see a flash message saying {string}', async (message) => {
    const elem = await $('//*[@id="result"]');
    await expect(await $('//*[@id="result"]')).toBeExisting();
    await expect(await $('//*[@id="result"]')).toHaveTextContaining(message);
});
