let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
function cloneObj(obj) {
    let newObj = {};
    for (const key in obj) {
        if (typeof obj[key] !== 'object') {
            newObj[key] = obj[key];
        } else {
            newObj[key] = cloneObj(obj[key])
        }
    }
    return newObj;
}
let passportWithAddressClone = cloneObj(passportWithAddress);
passportWithAddressClone.address.city = 'Bobryisk';
console.log(passportWithAddress.address.city);
console.log(passportWithAddressClone.address.city);