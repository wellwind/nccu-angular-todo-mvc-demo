import { NccuAngularTodoMvcDemoPage } from './app.po';

describe('nccu-angular-todo-mvc-demo App', () => {
  let page: NccuAngularTodoMvcDemoPage;

  beforeEach(() => {
    page = new NccuAngularTodoMvcDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
