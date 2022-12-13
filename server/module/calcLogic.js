// module.exports = function(obj){
//     let answer = eval(obj.num1 + obj.operator + obj.num2);
//     return {answer : answer};
// }


function baseLogic(obj){
    let answer;
    let symbol = obj.operator;
    if(symbol === "+"){
        answer = parseFloat(obj.num1) + parseFloat(obj.num2);
    }
    else if(symbol === "-"){
        answer = parseFloat(obj.num1) - parseFloat(obj.num2);
    }
    else if(symbol === "*"){
        answer = parseFloat(obj.num1) * parseFloat(obj.num2);
    }
    else{
        answer = parseFloat(obj.num1) / parseFloat(obj.num2);
    }

    return {answer : answer};
}
module.exports.baseLogic = baseLogic;


function stretchLogic(obj){
    let proxyObj = obj;

    for(let i=0; i<obj.operators.length; i++){
        for(let j=0; j<obj.operators.length; j++){
            if(proxyObj.operators[j] === "*"){
                proxyObj.numbers.splice(j,1)
                proxyObj.numbers.splice(j+1,1)
                proxyObj.operators.splice(j,1)
                proxyObj.numbers.splice(2,0,proxyObj.numbers[j] * proxyObj.numbers[j + 1])
                console.log('*')
            }
            else if(proxyObj.operators[j] === "/"){
                proxyObj.numbers.splice(j,1)
                proxyObj.numbers.splice(j+1,1)
                proxyObj.operators.splice(j,1)
                proxyObj.numbers.splice(2,0,proxyObj.numbers[j] / proxyObj.numbers[j + 1])
                console.log('/')
            }
        }
        if(proxyObj.operators[i] === "+"){
            proxyObj.numbers.splice(i,0,parseFloat(proxyObj.numbers[i]) + parseFloat(proxyObj.numbers[i + 1]))
            proxyObj.numbers.splice(i+2,1)
            proxyObj.numbers.splice(i+1,1)
            proxyObj.operators.splice(i,1)
            console.log(proxyObj.numbers)
        }
        else if(proxyObj.operators[i] === "-"){
            proxyObj.numbers.splice(i,1)
            proxyObj.numbers.splice(i+1,1)
            proxyObj.operators.splice(i,1)
            proxyObj.numbers.splice(2,0,proxyObj.numbers[i] - proxyObj.numbers[i + 1])
            console.log('-')
        }
        
    }
    return proxyObj;
}

module.exports.stretchLogic = stretchLogic;
// const {baseLogic} = require('./module/calcLogic.js)

// function stretchOperators(symbol, numsArray){
//     if(symbol === "+"){
        
//     }
//     else if(symbol === "-"){
        
//     }
//     else if(symbol === "*"){
        
//     }
//     else if(symbol === "/"){
        
//     }
// }


const arr = [1,2,3,4,5]
arr.splice(0,0,'qwer')
console.log(arr)