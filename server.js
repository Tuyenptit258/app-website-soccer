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



const db = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};



app.listen(process.env.PORT, () => {
  console.log("start on")
})