let passport = {
    name: "Petr",
    surname: "Petrov",
};
let passportClone = { ...passport };
passportClone.name = 'Ivan';
console.log(passportClone.name);
console.log(passport.name);
