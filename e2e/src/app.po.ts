import { browser, by, element } from 'protractor';


export class AppPage {

  private botonUsuarios = element.all(by.id("botonUsuarios"));
  private botonParques = element.all(by.id("botonParques"));
  private botonTiquetes = element.all(by.id("botonTiquetes"));

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  async clickBotonUsuarios() {
    await this.botonUsuarios.click();
  }

  async clickBotonParques() {
    await this.botonParques.click();
  }

  async clickBotonTiquetes() {
    await this.botonTiquetes.click();
  }



}
