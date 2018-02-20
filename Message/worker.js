this.addEventListener('message', function (e) {
  console.log(e.data);
});

let i = 0;

setInterval(function () {
  this.postMessage('counter value: ' + i++);
}.bind(this), 3000);
