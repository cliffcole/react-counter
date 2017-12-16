const express = require('express');
const cors = require('express-cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

let counter = 0;

app.get('/api', (req, res) => {
    res.json({'counter': counter});
});
app.post('/api/add', (req,res) => {
    if (!Number.isInteger(req.body.add)){
        res.status(400).json({'error': 'add must be a number'})
    }
    else {
        add = req.body.add
        counter += add;
        res.json({'counter': counter})
    }
    
    
})
app.post('/api/subtract', (req,res) => {
    if (!Number.isInteger(req.body.subtract)){
        res.status(400).json({'error': 'add must be a number'})
    }else {
        subtract = req.body.subtract;
        counter -= subtract;
        res.json({'counter': counter})
    }
    
})

app.listen(3001);