import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarParques } from "../../page/parque/listar-parques.po";

describe("Eliminar Parque", () => {
  let page: AppPage;
  let listarParques: ListarParques;
  const PARQUE_ELIMINADO = "El parque ha sido eliminado";

  beforeEach(() => {
    page = new AppPage();
    listarParques = new ListarParques();
  });

  it("Debe eliminar el Parque", () => {
  //arrange
    page.navigateTo();
    browser.sleep(500);
    page.clickBotonParques();
    browser.sleep(500);

    //act
    listarParques.clickBotonEliminarParque();
    browser.sleep(500);

    //assert
    const alerta = "El parque ha sido eliminado";
    expect(alerta).toEqual(PARQUE_ELIMINADO);
    browser.sleep(500);
  });
});
