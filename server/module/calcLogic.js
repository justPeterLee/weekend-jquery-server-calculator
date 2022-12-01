module.exports = function(obj){
    let answer = eval(obj.num1 + obj.operator + obj.num2);
    return {answer : answer};
}