 class PasswordPage {
    constructor(page) {
        this.page = page;
    }

    get passwordInput() {
        return this.page.locator('input[data-test=password]');
    }

    get placeholderText() {
        return this.passwordInput.getAttribute('placeholder');
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async submitForm() {
        
        await this.page.click('#login-button'); // Assuming there's a submit button
    }

    async getPasswordValue() {
        return await this.passwordInput.inputValue();
    }
    
}
module.exports=PasswordPage