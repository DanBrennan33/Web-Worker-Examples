function add(l, r) {
  this.postMessage(l + r);
}

function sub(l, r) {
  this.postMessage(l - r);
}

this.addEventListener('message', function (e) {
  switch (e.data.type) {
    case 'add':
      add.apply(this, e.data.args);
      break;
    case 'sub':
      sub.apply(this, e.data.args);
      break;
    default:
      console.log('No format function indicated.');
      break;
  };
});
