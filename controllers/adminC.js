const Club = require('../models/clubM')

const { mongooseToObject } = require('../mutil/mongoose')

const { a } = require('../mutil/mongoose')
class memberController {

    //[GET] //quản lí danh sách các clb / admin/club
    adminClub(req, res,next) {
        Club.find({})
            .then(clubs=>res.render('forme.hbs',{
                clubs:a(clubs)
            }))
            .catch(next)
        }
    //[Update] /admin/:id/edit
    edit(req,res,next) {
        Club.findById(req.params.id)
            .then(club => res.render('edit.hbs',{
                club : mongooseToObject(club)
            }))
            .catch(next)
    }
    //[Pach] /admin/:id
    sua(req,res,next) {
        
      Club.updateOne({_id: req.params.id}, req.body)
        .then(() =>res.redirect('/admin/club') )
        .catch(next)
    
        
    }
    // Xoa tạm /admin/:id
    destroy(req,res,next) {
        Club.delete({_id : req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
}



module.exports = new memberController()
