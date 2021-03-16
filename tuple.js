// var id=123;
// var empName="John";
// var employee:[number,string]= [123,"John"];
// employee.push(2,"Mary")
// console.log(employee)
function dis() {
    return 99;
}
var fruits;
(function (fruits) {
    fruits[fruits["mango"] = 0] = "mango";
    fruits[fruits["grapes"] = 1] = "grapes";
    fruits[fruits["papaya"] = dis()] = "papaya";
    fruits[fruits["tomato"] = 0] = "tomato";
})(fruits || (fruits = {}));
console.log(fruits.papaya);
