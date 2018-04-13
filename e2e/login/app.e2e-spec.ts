import { AppPage } from './app.po';

describe('protractor-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Login button should available', () => {
    page.navigateTo();
    expect(page.getLoginButton().getText()).toEqual('Login');
  });

  it('Login functionality should work', () => {
    page.navigateTo();
    page.updateUsernameFeild('admin');
    page.updatePasswordFeild('admin');

    page.getLoginButton().click();

    expect(page.getHomeText()).toEqual('Home Page');
  });
});
