import { ListarParques } from "e2e/src/page/parque/listar-parques.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";

describe("Listar parques", () => {
  let page: AppPage;
  let listarParques: ListarParques;

  beforeEach(() => {
    page = new AppPage();
    listarParques = new ListarParques();
  });

  it("Deberia listar parques", () => {
    //arrange
    page.navigateTo();
    //act
    browser.sleep(300);
    //assert
    expect(2).toBe(listarParques.contarParques());
    browser.sleep(500);
  });
});
