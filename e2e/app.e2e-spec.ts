import { DemoNg2PolymerPage } from './app.po';

describe('demo-ng2-polymer App', function() {
  let page: DemoNg2PolymerPage;

  beforeEach(() => {
    page = new DemoNg2PolymerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
