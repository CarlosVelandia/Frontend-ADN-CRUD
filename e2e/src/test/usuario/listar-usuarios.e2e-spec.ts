import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarUsuarios } from "e2e/src/page/usuario/listar-usuarios.po";



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
    page.clickBotonUsuarios();
    browser.sleep(500);
    //assert
    expect(2).toBe(listarUsuarios.contarUsuarios());
    browser.sleep(500);
  });
});
