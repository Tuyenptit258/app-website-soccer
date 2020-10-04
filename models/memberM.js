const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator')

const mongooseDelete = require('mongoose-delete')



const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/my_database_club', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const memberSchema = new Schema({
  name: { type: String, maxlength: 255 },
  age: { type: String, maxlength: 255 },
  address: { type: String, maxlength: 255 },
  decreption: { type: String, maxlength: 255 },
  slug: { type: String, maxlength: 255 },
  creatAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }


 
})

mongoose.plugin(slug)
memberSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
})
const memberModel = mongoose.model('member', memberSchema)


module.exports = memberModel