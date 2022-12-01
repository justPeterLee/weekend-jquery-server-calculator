$(onReady)

function onReady(){
    console.log('hello');
    $('button').on('click', ()=>{console.log($('input').val())})
}