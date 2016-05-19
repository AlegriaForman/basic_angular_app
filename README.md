## basic_angular_app with eslintify and protractor.
### To run protractor test
1. Type 'webdriver-manager start' to your command line to run Selenium server.
2. On another terminal, type 'gulp protractor:test'.  It should have a result of '1 spec, 0 failures.'
3. To test protractor by itself without the use of Gulp, start your server by typing 'node server.js'.
4. Open another terminal, and type 'webdriver-manager start' to start the Selenium server.
5. Type 'protractor test_and_integration/config.js.' It should also have a result of '1 spec, 0 failures.'
6. Type gulp lint:client - to test the eslint from the client side
7. Type gulp lint:server - to test the eslint from the server side
