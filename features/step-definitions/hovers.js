const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the {string} page', async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When('I hover on {int}', async (picture) => {
    await $('.figure>img').moveTo();
});

Then('I should see {int} figcaption with content', async (message) => {
    await expect(await $('.figure > img + .figcaption')).toBeExisting();
    await expect(await $('.figure > img + .figcaption')).toHaveTextContaining(message);
});
