const express = require('express')
const app = express()
const route = require('./routers')
const bodyParser = require('body-parser')
const { a } = require('./mutil/mongoose')

const methodOverride = require('method-override')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

route(app)

app.get('/', function(req,res){
  res.render('home.hbs')
})

app.listen(process.env.PORT, () => {
  console.log("start on")
})