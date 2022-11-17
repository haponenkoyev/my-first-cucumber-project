const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the {string} page', async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When('I login with {word} and {word}', async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then('I shuold see a flash message saying {string}', async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});

When('I click on the add button', async () => {
    await $('//*[@id="content"]/div').click;
});

Then('I see delete button appiaring', async () => {
    await expect($('//*[@id="elements"]')).toBeExisting;
});

When('I click on the {int}', async (checkboxes) => {
    await $('//*[@id="checkboxes"]/input[1]').click;
});

Then('I see selected {int} sign', async (checkboxes) => {
    await expect(await $('//*[@id="checkboxes"]/input[1]').ToBeSelected);
});

When('I press a {}', async (key) => {
    await $('//*[@id="target"]');
});

Then('I should see a flash message saying {string}', async (message) => {
    const elem = await $('//*[@id="result"]');
    await expect(await $('//*[@id="result"]')).toBeExisting();
    await expect(await $('//*[@id="result"]')).toHaveTextContaining(message);
});

When('I hover on {int}', async (picture) => {
    await $('.figure>img').moveTo();
});

Then('I should see {int} figcaption with content', async (message) => {
    await expect(await $('.figure > img + .figcaption')).toBeExisting();
    await expect(await $('.figure > img + .figcaption')).toHaveTextContaining(message);
});

