const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the {string} page', async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When('I click on the add button', async () => {
    await $('//*[@id="content"]/div').click;
});

Then('I see delete button appiaring', async () => {
    await expect($('//*[@id="elements"]')).toBeExisting;
});