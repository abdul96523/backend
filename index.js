import express from 'express';

const app = express();
const port=3000

app.get('/',(req,res)=>{
    res.status(200).send('This message has been changed from test1 branch')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
