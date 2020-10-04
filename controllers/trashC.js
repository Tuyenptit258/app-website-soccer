const Club = require('../models/clubM')

//const { mongooseToObject } = require('../unti/mongoose')

const { a } = require('../mutil/mongoose')
class clubController {

    //[GET] // in ra ds đã xóa trash/club
    creatagain(req,res,next) {
        Club.findDeleted({})
        .then(clubs  => res.render('trash.hbs',{
            clubs: a(clubs)
        }))
        .catch(next)
    }
    // khôi phuc đã xóa // trash/:id/restore
    suamot(req,res,next) {
        Club.restore({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    // xóa vĩnh viễn // trash/:id/force
    forceDestroy(req,res,next) {
        Club.deleteOne({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
   
  

}



module.exports = new clubController()
