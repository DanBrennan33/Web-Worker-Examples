this.addEventListener('connect', function (e) {
  console.log(e);

  let port = e.ports[0];
  port.start();

  port.addEventListener('message', function (e) {
    console.log('Received: ' + e.data);
  });
});
