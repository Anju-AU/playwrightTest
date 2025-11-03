

// password.test.js
const { test, expect } = require('@playwright/test');
const PasswordPage = require('../page_object/password');

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
});

test('Verify that the input field accepts valid passwords', async ({ page }) => {
    const passwordPage = new PasswordPage(page);
    const validPassword = 'Password123';
    await passwordPage.enterPassword(validPassword);
    await passwordPage.submitForm();
    // Add assertion for successful submission, e.g. checking for a redirect or success message
});

// test('Ensure that the placeholder text is displayed correctly when the input field is empty', async ({ page }) => {
//     const passwordPage = new PasswordPage(page);
//     const placeholder = await passwordPage.placeholderText;
//     expect(placeholder).toBe('Password');
// });

// test('Check that the input field allows users to enter passwords without any restrictions on special characters', async ({ page }) => {
//     const passwordPage = new PasswordPage(page);
//     const specialCharPassword = 'Passw0rd@2023!';
//     await passwordPage.enterPassword(specialCharPassword);
//     const value = await passwordPage.getPasswordValue();
//     expect(value).toBe(specialCharPassword);
// });

test.skip('Confirm that the input field does not display the entered password in plain text', async ({ page }) => {
    const passwordPage = new PasswordPage(page);
    const password = 'Password1!';
    await passwordPage.enterPassword(password);
    const value = await passwordPage.getPasswordValue();
    expect(value).not.toBe(password); // It should be obscured
});

test('Attempt to submit the form with an empty password field and verify that an appropriate error message is displayed', async ({ page }) => {
    const passwordPage = new PasswordPage(page);
    await passwordPage.submitForm();
    // Add assertion for the error message
});

test('Enter a password that does not meet the security requirements and check for validation error', async ({ page }) => {
    const passwordPage = new PasswordPage(page);
    const invalidPassword = 'Short1!';
    await passwordPage.enterPassword(invalidPassword);
   // await passwordPage.submitForm();
    // Add assertion for the validation error
});