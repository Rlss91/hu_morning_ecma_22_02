// const setTimeoutCBT = ()=>{
//   let dateT = new Date();
//   if (dateT.getMilliseconds() % 2 == 0) {
//     resolveT("success"); //then
//   } else {
//     rejectT("error"); //catch
//   }
// }

// let promiseT = new Promise((resolveT, rejectT) => {
//   setTimeout(setTimeoutCBT, 2000);
// });

//init promise
let promiseT = new Promise((resolveT, rejectT) => {
  setTimeout(() => {
    let dateT = new Date();
    if (dateT.getMilliseconds() % 2 == 0) {
      resolveT("success"); //then
    } else {
      rejectT("error"); //catch
    }
  }, 2000);
});

// make it work
promiseT
  .then((dataFromServerT) => {
    console.log("dataFromServer", dataFromServerT);
  })
  .catch((errorT) => {
    console.error("error from server", errorT);
  });

// setTimeout(() => {
//     console.log("success")
// }, 2000);

/*

#class work
create 2 variables
a/b

*/
let numAT = 2,
  numBT = 1;
let promiseCalcT = new Promise((resolveT, rejectT) => {
  if (numBT == 0) {
    rejectT("can't devide by zero");
  } else {
    resolveT(numAT / numBT);
  }
});

promiseCalcT
  .then((resoltT) => {
    console.log("resolt", resoltT);
  })
  .catch((errT) => {
    console.error(errT);
  });
