onclick = function (element) {
    const num = document.getElementById('num');
    let elem = element.target;
    let str = "";
    let re = /\./g;
    str += num.value;
    if (elem.value !== undefined) {
        if (elem.value === "=") {
            num.value = eval(str);
        } else if (elem.value === "ac") {
            num.value = "";
        } else if (elem.value === "ce") {
            num.value = num.value.slice(0, -1);
        } else if (elem.value === "." && re.test(str)) {

        } else if (num.value === "0" && elem.value !== ".") {
            num.value = elem.value;
        } else if (isNaN(elem.value) && isNaN(str[str.length - 1])) {

        } else {
            num.value += elem.value;
        }
    }
};