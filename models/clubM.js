const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator')

const mongooseDelete = require('mongoose-delete')



const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/my_database_club', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mbSchema = new Schema({
  name: { type: String, maxlength: 255 },
  nameld: { type: String, maxlength: 255 },
  age: { type: String, maxlength: 255 },
  member: { type: String, maxlength: 255 },
  address: { type: String, maxlength: 255 },
  email: { type: String, maxlength: 255 },
  phone: { type: String, maxlength: 255 },
  decreption: { type: String, maxlength: 255 },
  slug: { type: String, maxlength: 255 },
  creatAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }


 
})

mongoose.plugin(slug)
mbSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
})
const mbModel = mongoose.model('mb', mbSchema)


module.exports = mbModel