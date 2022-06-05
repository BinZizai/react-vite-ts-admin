function getData() {
  return new Promise((resove) => {
    setTimeout(() => {
      resove('data-1');
    }, 1000);
  });
}
function getData2(val: any) {
  console.log(val);

  return new Promise((resove) => {
    setTimeout(() => {
      resove('data-2');
    }, 1000);
  });
}
function getData3(val: any) {
  console.log(val);
  return new Promise((resove) => {
    setTimeout(() => {
      resove('data-3');
    }, 1000);
  });
}

function* gen() {
  const f1 = yield getData();
  const f2 = yield getData2(f1);
  const f3 = yield getData3(f2);
}

function run(gen) {
  const g = gen();

  function next(data) {
    const result = g.next(data);
    if (result.done) {
      return result.value;
    }

    result.value.then((res) => {
      console.log(res);

      next(res);
    });
  }
  next(null);
}

run(gen);

export {};
