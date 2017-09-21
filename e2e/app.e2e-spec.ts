import { EcommarcePage } from './app.po';

describe('ecommarce App', () => {
  let page: EcommarcePage;

  beforeEach(() => {
    page = new EcommarcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
