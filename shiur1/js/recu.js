const deepCopy = (obj) => {
  let newObj = { ...obj };
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        newObj[key] = [...deepCopy(obj[key])];
      } else {
        //   newObj[key] = { ...obj[key] };
        newObj[key] = { ...deepCopy(obj[key]) };
      }
    }
  }
  return newObj;
};

let objInObj = {
  name: "kenny",
  age: 7,
  address: {
    city: "tlv",
    street: "benguriyun",
    home: 12,
  },
};

let objInObjNew = deepCopy(objInObj);
