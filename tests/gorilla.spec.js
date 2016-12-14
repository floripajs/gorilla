var test = require('ava');
var gorilla = require('../dist/gorilla');

test('the log method', t => {
  t.is(gorilla.log('hi'), 'Logging the message : hi');
});
