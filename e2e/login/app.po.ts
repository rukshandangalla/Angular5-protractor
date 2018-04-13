import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/login');
  }

  updateUsernameFeild(username: string) {
    element(by.css('[name="username"]')).sendKeys(username);;
  }

  updatePasswordFeild(password: string) {
    element(by.css('[name="password"]')).sendKeys(password);
  }

  getLoginButton() {
    return element(by.css('[label="Login"]'));
  }

  getHomeText() {
    return element(by.id('home')).getText();
  }
}
