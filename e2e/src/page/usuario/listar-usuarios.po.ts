import { by, element } from "protractor";

export class ListarUsuarios{

  private tablaUsuarios = element.all(by.className("tablaUsuarios"));

  async contarUsuarios() {
    return this.tablaUsuarios.count();
  }
}
