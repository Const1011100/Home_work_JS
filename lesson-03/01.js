const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const flag = colors.filter(elem => {
        if (elem === "черный" || elem === "красный" || elem === "желтый") {
            return elem;
        }
    });
    return flag.join('-');
}

console.log(createColorString());