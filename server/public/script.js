$(onReady)

function onReady(){
    $('.op-btn').on('click', buttons);
    $('#equal').on('click', solve);
    $('#clear').on('click', clear);
}





// button functions
let operator;
function buttons(){

    // show selected button
    $(this).siblings().removeClass('selected');
    $(this).toggleClass('selected');

    // send button data 
    if($(this).data("op") === 'add'){
        operator = '+'
    }
    else if($(this).data("op") === 'sub'){
        operator = "-"
    }
    else if($(this).data("op") === 'mult'){
        operator = "*"
    }
    else{
        operator = "/"
    }
    
    console.log(operator)
}

//solve equation
function solve(){
    let numObj = {}
    if($('#num1').val()){
        if($('#num2').val()){
            if(operator){
                console.log($('#num1').val(), operator, $('#num2').val());
                numObj.num1 = $('#num1').val();
                numObj.num2 = $('#num2').val();
                numObj.operator = operator;
                console.log(numObj)

                sendAjax(numObj)
            }else{
                alert('pls select an operator')
            }
        }else{
            alert('your second input is invalid');
        }
    }else{
        alert('your first input is invalid');
    }

}

//clear function
function clear(){
    console.log('clear')

    $('#num1').val('');
    $('#num2').val('');
    $('.button-container').children().removeClass('selected');

    operator = undefined;
    console.log(eval('9 + 9'))

}


//ajax function
function sendAjax(data){
    $.ajax({
        method: 'POST',
        url: '/solve',
        data: data
    }).then(function(response){
        $('#answer').text(`${response.answer}`)
    }).catch(function(response){
        console.log("failed request", response)
    })
    readAjax()
}

function readAjax(){
    $.ajax({
        method: 'GET',
        url: '/history',
    }).then(function(response){
        $(`
            <li> 
                <p>${response[response.length - 1].num1} ${response[response.length - 1].operator} ${response[response.length - 1].num2} = ${response[response.length - 1].currAnswer}</p>
            </li>
        `).appendTo('#history')
        console.log(response)
    })
}