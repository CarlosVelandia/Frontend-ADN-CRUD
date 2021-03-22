import { by, element } from "protractor";

export class CrearUsuario {

  private inputNombre = element(by.id("nombreUsuario"));
  private inputCedula = element(by.id("cedula"));
  private botonCreaUsuario = element(by.id("guardarUsuario"));

  async clickInputNombre() {
    await this.inputNombre.click();
  }
  async clickInputCedula() {
    await this.inputCedula.click();
  }

  async limpiarInputNombre() {
    await this.inputNombre.clear();
  }

  async limpiarInputCedula() {
    await this.inputCedula.clear();
  }

  async setInputNombre(nombreUsuario: string) {
    await this.inputNombre.sendKeys(nombreUsuario);
  }

  async setInputCedula(cedula: string) {
    await this.inputCedula.sendKeys(cedula);
  }

  async clickBotonGuardarUsuario() {
    await this.botonCreaUsuario.click();
  }

}
