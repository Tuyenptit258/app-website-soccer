const Member = require('../models/clubM')

//const { mongooseToObject } = require('../unti/mongoose')

//const { a } = require('../unti/mongoose')
class clubController {

    //[GET] // in ra danh sách đăng kí clb
    club(req, res) {
        res.render('dangkiC.hbs')
    }


    //[POST] // kết quả clb

    dangki(req, res,next) {
        // res.json(req.body)
        // req.body.id=shortid.generate()
        // req.body.avatar = req.file.path.split('/').slice(1).join('/')
        const fromData = req.body
        const member = new Member(fromData)
        member.save()
        res.redirect('/club/me')
    }
    
   
  

}



module.exports = new clubController()
