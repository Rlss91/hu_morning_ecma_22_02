const calcPromiseT = (numAT, numBT) => {
  return new Promise((resolveT, rejectT) => {
    if (numBT == 0) {
      rejectT("can't devide by zero");
    } else {
      resolveT(numAT / numBT);
    }
  });
};

const calcMultiTimesT = async () => {
  let resoltT = await calcPromiseT(10, 1);
  resoltT = await calcPromiseT(resoltT, 2);
  resoltT = await calcPromiseT(resoltT, 0.5);
  console.log("resoltT", resoltT);
};

const calcMultiTimesWithCatchT = async () => {
  try {
    let resoltT = await calcPromiseT(10, 1);
    resoltT = await calcPromiseT(resoltT, 2);
    resoltT = await calcPromiseT(resoltT, 0.5);
    console.log("resoltT", resoltT);
  } catch (err) {
    console.error(err);
  }
};
calcMultiTimesWithCatchT();

/*

    create promise that will sub random number by milliseconds % 2,
    2 times

*/
const calcXT = (numT) => {
  return new Promise((resolveT, rejectT) => {
    let numZugiT = new Date().getMilliseconds() % 2;
    if (numZugiT) {
      resolveT(numT / numZugiT);
    } else {
      rejectT("can't do that");
    }
  });
};

//https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const calcRandomT = async () => {
  try {
    let randomNumberT = getRndInteger(1, 1000000);
    let resoltT = await calcXT(randomNumberT);
    resoltT = await calcXT(resoltT);
    console.log("resoltT", resoltT);
  } catch (errT) {
    console.error(errT);
  }
};

/*

    create promise that generate random number between min and max
    if min > max then reject

*/
const randomNumberPromiseT = (minT, maxT) => {
  return new Promise((resolveT, rejectT) => {
    if (minT > maxT) {
      rejectT("max > min!!!!");
    } else {
      let randomNumberT = Math.floor(Math.random() * (maxT - minT + 1)) + minT;
      resolveT(randomNumberT);
    }
  });
};

const randomNumberPromiseRunT = async () => {
  try {
    let randomNumberT = await randomNumberPromiseT(5, 20);
    console.log("randomNumberT", randomNumberT);
  } catch (err) {
    console.error(err);
  }
};
