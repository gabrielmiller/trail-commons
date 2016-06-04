export class TrailCommonsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('trail-commons-app h1')).getText();
  }
}
