const People = require('../models/memberM')

//const { mongooseToObject } = require('../unti/mongoose')

//const { a } = require('../unti/mongoose')
class memberController {

    //[GET] // tạo danh sách thành viên
    member(req, res) {
        res.render('creatMember.hbs')
    }
    //[POST] // in ra danh sách thành viên

    tao(req, res,next) {
        // res.json(req.body)
        const fromData = req.body
        const people = new People(fromData)
        people.save()
        res.redirect('/people/member')
    }
    
}



module.exports = new memberController()
