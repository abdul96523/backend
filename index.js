import express from 'express';

const app = express();
const port=3000

app.get('/',(req,res)=>{
    res.status(200).send('Thank you SHESHI, SIRI, SHILPA for joining todays party!! & sorry SHYAM we missed you ,party to you will be noted down as due !! ')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
