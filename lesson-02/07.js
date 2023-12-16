let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
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
let passportMarriedClone = cloneObj(passportMarried);
passportMarriedClone.married = true;
console.log(passportMarried);
console.log(passportMarriedClone);