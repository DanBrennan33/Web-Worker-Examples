function add(l, r) {
   return l + r;
}

function sub(l, r) {
  return l - r;
}

this.addEventListener('message', function (e) {
  let result = null;
  switch (e.data.type) {
    case 'add':
      result = add.apply(this, e.data.args);
      break;
    case 'sub':
      result = sub.apply(this, e.data.args);
      break;
    default:
      console.log('No format function indicated.');
      break;
  };

  this.postMessage({
    correlationId: e.data.correlationId,
    result: result
  });
});
