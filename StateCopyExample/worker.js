let msg = null;

this.addEventListener('message', function (e) {
  console.log('Message Received: ', e.data);
  msg = e.data;
});

setTimeout(function () {
  console.log('Message now: ', msg);
});
