import { ListarUsuarios } from "e2e/src/page/usuario/listar-usuarios.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";

describe("Listar usuarios", () => {
  let page: AppPage;
  let listarUsuarios: ListarUsuarios;

  beforeEach(() => {
    page = new AppPage();
    listarUsuarios = new ListarUsuarios();
  });

  it("Deberia listar usuarios", () => {
    //arrange
    page.navigateTo();
    //act
    browser.sleep(300);
    //assert
    expect(2).toBe(listarUsuarios.contarUsuarios());
    browser.sleep(500);
  });
});
