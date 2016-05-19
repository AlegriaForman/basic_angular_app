describe('Todo demoApp', function() { //eslint-disable-line
  it('should have a 2 way data binding', () => {
    browser.get('http://localhost:5000');
    element(by.model('todo')).sendKeys('clean house');
    element(by.binding('todo')).getText().then(function(text) {
      expect(text).toEqual('To Do: clean house');
    });
  });
});
