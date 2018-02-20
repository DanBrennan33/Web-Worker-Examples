function add(l, r) {
  if (!parseFloat(l) || !parseFloat(r))
    throw 'Must have numeric inputs.';
   return l + r;
}

function sub(l, r) {
  if (!parseFloat(l) || !parseFloat(r))
    throw 'Must have numeric inputs.';
  return l - r;
}

this.addEventListener('message', function (e) {
  let result = null;
  try {
    switch (e.data.type) {
      case 'add':
        result = {
          isError: false,
          value: add.apply(this, e.data.args)
        }
        break;
      case 'sub':
        result = {
          isError: false,
          value: sub.apply(this, e.data.args)
        }
        break;
      default:
        console.log('No format function indicated.');
        break;
    };
  } catch (e) {
    result = {
      isError: true,
      value: e
    }
  }

  this.postMessage({
    correlationId: e.data.correlationId,
    result: result
  });
});
