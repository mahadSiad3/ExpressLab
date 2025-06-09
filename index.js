import express from 'express'

const app = express();
//const port = 3000;

app.use((req,res,next)=>{
    console.log('request recieved')
    next()
})
app.get('/', (req,res)=>{
    res.send("hello world")
})

app.get('/express',(req,res)=>{
    res.send("this is the express app")
})

app.get('/users/:id/profile/:data' , (req,res)=>{
    console.log(req.params)
    res.send('user profile data')
})


app.listen(port,()=>{
    console.log('server running on ',port)
})