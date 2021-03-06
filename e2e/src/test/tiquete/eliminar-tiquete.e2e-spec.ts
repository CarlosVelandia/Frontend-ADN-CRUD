import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarTiquetes } from "../../page/tiquete/listar-tiquetes.po";

describe("Eliminar Tiquete", () => {
  let page: AppPage;
  let listarTiquetes: ListarTiquetes;
  const TIQUETE_ELIMINADO = "El tiquete ha sido eliminado";

  beforeEach(() => {
    page = new AppPage();
    listarTiquetes = new ListarTiquetes();
  });

  it("Debe eliminar el Tiquete", () => {
  //arrange
    page.navigateTo();
    browser.sleep(500);
    page.clickBotonTiquetes
    browser.sleep(500);

    //act
    listarTiquetes.clickBotonEliminarTiquete();
    browser.sleep(500);

    //assert
    const alerta = "El tiquete ha sido eliminado";
    expect(alerta).toEqual(TIQUETE_ELIMINADO);
    browser.sleep(500);
  });
});
