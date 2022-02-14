const calcPromise = (numA, numB) => {
  return new Promise((resolve, reject) => {
    if (numB == 0) {
      reject("can't devide by zero");
    } else {
      resolve(numA / numB);
    }
  });
};

Promise.all([calcPromise(1, 2), calcPromise(10, 0), calcPromise(10, 10)])
  .then((values) => {
    console.log("values", values);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.allSettled([calcPromise(1, 2), calcPromise(10, 0), calcPromise(10, 10)])
  .then((values) => {
    console.log("values", values);
  })
  .catch((err) => {
    console.error(err);
  });
