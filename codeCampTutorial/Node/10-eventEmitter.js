const EventEmitter = require('events');
const customEmitter = EventEmitter();

customEmitter.on('response', () =>
{
    console.log('data received');
});

customEmitter.emit('response');

