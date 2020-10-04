const path = require('path')

const clubRouter = require('./club')
const memberRouter = require('./member')
const adminRouter = require('./admin')
const trashRouter = require('./trash')
const clientRouter = require('./client')
function router(app){
    app.use('/club',clubRouter)
    app.use('/people',memberRouter)
    app.use('/admin',adminRouter)
    // app.use('/client',clientRouter)
    app.use('/trash',trashRouter)
}

module.exports = router