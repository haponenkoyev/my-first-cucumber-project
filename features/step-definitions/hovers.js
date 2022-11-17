const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the {string} page', async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When('I hover on {int}', async (picture) => {
    await $('//img[@src="/img/avatar-blank.jpg"]').moveTo();
});

Then('I should see {int} figcaption with content', async (message) => {
    const elem =await $('//img[@src="/img/avatar-blank.jpg"]');
    await expect(await $('//img[@src="/img/avatar-blank.jpg"]')).toBeExisting();
    await expect(await $('//img[@src="/img/avatar-blank.jpg"]')).toHaveTextContaining(message);
});
