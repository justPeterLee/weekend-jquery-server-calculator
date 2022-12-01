const express = require('express');

const calcFunc = require('./module/calcLogic.js');
const history = require('./module/history.js');

const app = express();
const PORT = 5001;

app.use(express.static('server/public'));
app.use(express.urlencoded())


app.post('/solve', (req, res)=>{
    console.log('in the post request', req.body)

    req.body.currAnswer = calcFunc(req.body).answer;
    history.push(req.body)
    res.send(calcFunc(req.body))
})

app.get('/history', (req, res)=>{
    console.log('in the get request');
    
    res.send(history);
})
app.listen(PORT, ()=>{
    console.log('Your server is listening on port: ', PORT)
});