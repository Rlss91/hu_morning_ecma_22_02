const calcPromiseT = (numAT, numBT) => {
  return new Promise((resolveT, rejectT) => {
    if (numBT == 0) {
      rejectT("can't devide by zero");
    } else {
      resolveT(numAT / numBT);
    }
  });
};

calcPromiseT(25, 0)
  .then((resoltT) => {
    console.log("resoltT", resoltT);
  })
  .catch((errT) => {
    console.error(errT);
  });
