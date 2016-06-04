import { TrailCommonsPage } from './app.po';

describe('trail-commons App', function() {
  let page: TrailCommonsPage;

  beforeEach(() => {
    page = new TrailCommonsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('trail-commons works!');
  });
});
