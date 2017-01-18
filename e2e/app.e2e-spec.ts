import { FormvaliPage } from './app.po';

describe('formvali App', function() {
  let page: FormvaliPage;

  beforeEach(() => {
    page = new FormvaliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
