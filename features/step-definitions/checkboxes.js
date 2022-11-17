const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the {string} page', async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When('I click on the {int}', async (checkboxes) => {
    await $('//*[@id="checkboxes"]/input[checkboxes]').click;
});

Then('I see selected {int} sign', async (checkboxes) => {
    await expect(await $('//*[@id="checkboxes"]/input[1]').ToBeSelected);
});