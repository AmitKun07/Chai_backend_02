const express = require('express')
const app = express()
// const port = 3000
require('dotenv').config()
// console.log(process.env)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
  res.send('<h2>Today i will do crunches 200 times...!<h2>')
})
app.get('/about', (req,res)=>{
    res.send("Today i will bench 60 kg...!")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
