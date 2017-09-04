import { MyNg4Page } from './app.po';

describe('my-ng4 App', () => {
  let page: MyNg4Page;

  beforeEach(() => {
    page = new MyNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
