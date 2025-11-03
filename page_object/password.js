 class PasswordPage {
    constructor(page) {
        this.page = page;
    }

    get passwordInput() {
        return this.page.locator('input#password');
    }

    get placeholderText() {
        return this.passwordInput.getAttribute('placeholder');
    }

    async enterPassword(password) {
        await this.page.locator("#username").fill("student"); // Assuming username is required
        await this.passwordInput.fill(password);
    }

    async submitForm() {
        
        await this.page.click('#submit'); // Assuming there's a submit button
    }

    async getPasswordValue() {
        return await this.passwordInput.inputValue();
    }
    
}
module.exports=PasswordPage