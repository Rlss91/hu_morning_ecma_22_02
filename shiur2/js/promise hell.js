const calcPromiseT = (numAT, numBT) => {
  return new Promise((resolveT, rejectT) => {
    if (numBT == 0) {
      rejectT("can't devide by zero");
    } else {
      resolveT(numAT / numBT);
    }
  });
};

calcPromiseT(10, 1).then((resoltT) => {
  calcPromiseT(resoltT, 2).then((resolt2T) => {
    calcPromiseT(resolt2T, 0.5).then((resolt3T) => {
      console.log("resolt3T", resolt3T);
    });
  });
});

calcPromiseT(10, 1)
  .then((resoltT) => {
    calcPromiseT(resoltT, 2)
      .then((resolt2T) => {
        calcPromiseT(resolt2T, 0.5)
          .then((resolt3T) => {
            console.log("resolt3T", resolt3T);
          })
          .catch((err3T) => {
            console.log(err3T);
          });
      })
      .catch((err2T) => {
        console.log(err2T);
      });
  })
  .catch((err1T) => {
    console.log(err1T);
  });
