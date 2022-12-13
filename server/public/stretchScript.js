$(onReady);

function onReady(){
    console.log('in stretch mode')
    $('button').on('click', buttonInput);
    $('#stretch-equal').on('click',buttonEqual)
}

let equation = [];
let num = [];
let nums = [];
let operators = [];

function buttonInput(){
    if($(this).attr('class') == 'stretch-op-btn' && num.join('')){
        if($(this).data('op') === "+"){
            equation.push('+');
            nums.push(parseFloat(num.join("")))
            operators.push('+')
            num = [];
            
        }
        else if($(this).data('op') === "-"){
            equation.push('-');
            nums.push(parseFloat(num.join("")))
            operators.push('-')
            num = [];
        }
        else if($(this).data('op') === "*"){
            equation.push('*');
            nums.push(parseFloat(num.join("")));
            operators.push('*');
            num = [];
        }
        else if($(this).data('op') === "/"){
            equation.push('/');
            nums.push(parseFloat(num.join("")));
            operators.push('*');
            num = [];
        }
    }
    else{
        for(let i = 0; i<10; i++){
            if($(this).attr('class') == 'stretch-num-btn'){
                if($(this).data('num') == i){
                    console.log(i);
                    equation.push(i);
                    num.push(i)
                    break;
                }
                else if($(this).data('num') == '.'){
                    console.log('.');
                    equation.push('.')
                    num.push('.')
                    break;
                }
            }
        }
    }
    

    $('#stretch-equation').val(equation.join(""))
}



function buttonEqual(){
    let stretchData = {
        numbers : nums,
        operators : operators,
    };

    // push the last number in the equation
    if(num.length > 0){
        stretchData.numbers.push(parseFloat(num.join("")));
        num = []
        $('#stretch-equation').val('')
        equation = [];
        nums = [];
        operators = [];
        
    }
    
    
    console.log(stretchData)
    if(stretchData.operators.length > 0 && stretchData.numbers.length - 1 === stretchData.operators.length){
        $.ajax({
            method:"POST",
            url:'/stretch',
            data: stretchData,
        }).then((response)=>{
            console.log(response)
        })
    }else{
        alert('invalid input')
    }
}