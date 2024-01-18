import express from 'express';

const app = express();
const port=3000

app.get('/',(req,res)=>{
    res.status(200).send('Thank you very much guys for joining todays party!!')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
