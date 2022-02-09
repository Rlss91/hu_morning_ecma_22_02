let userObj = {
  name: "kenny",
  age: 7,
};
let userObj2 = {
  name: "bob",
  age: 30,
};
let addresObj = {
  city: "tlv",
  street: "benguriyun",
  home: 12,
};

//copy object
let userObjCopy = { ...userObj };

//copy multi objects
let userAddressObj = { ...userObj, ...addresObj };

//copy multi objects and add new props
let userAddressPhoneObj = { ...userObj, ...addresObj, phone: "050123456789" };

let newUserObj = { ...userObj, ...userObj2 };
console.log("newUserObj", newUserObj);

let objInObj = {
  name: "kenny",
  age: 7,
  address: {
    city: "tlv",
    street: "benguriyun",
    home: 12,
  },
};

//deep copy
let newobjInObj = { ...objInObj };
newobjInObj.address = { ...objInObj.address };
