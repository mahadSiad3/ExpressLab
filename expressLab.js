import express from 'express'

const app = express();
const port = 3000;

let botles = 99;
app.get('/',(req,res)=>{
    res.send(`<h1> ${botles} bottles of beer on the wall</h1> <a href="/98">99 botles of beer on the wall </a>`)
})

app.get("/:number_of_bottles",(req,res)=>{
    res.send(`<h1>${req.params.number_of_bottles} bottles of beer on the wall</h1> <a href = "/${req.params.number_of_bottles-1}">pass it down</a> `)
})

app.listen(port,()=>{
    console.log('server running on ', port)
})
