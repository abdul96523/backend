import express from 'express';

const app = express();
const port=3000

app.get('/',(req,res)=>{
    res.status(200).send(' I cordially invite you to join us !!,Please join todays party!!, Will be waiting for your presence!!')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
