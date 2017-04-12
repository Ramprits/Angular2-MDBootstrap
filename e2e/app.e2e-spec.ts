import { Angular2MdBootstrapPage } from './app.po';

describe('angular2-md-bootstrap App', () => {
  let page: Angular2MdBootstrapPage;

  beforeEach(() => {
    page = new Angular2MdBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
