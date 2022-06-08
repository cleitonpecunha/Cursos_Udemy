const moment = require('moment')
const jwt = require('jsonwebtoken')

const excludesUrls = ['/login','/users']

const AuthMiddleware = (req, res, next) => {

    if (excludesUrls.includes(req.path)){
        next()
    } else {
        const { authorization } = req.headers
        const { JWT_SECRET } = process.env

        //console.log(process.env)
        //console.log(req.headers)

        if (!authorization) {
            res.send({message: 'URL requer authenticação!'})
        }

        //console.log('passou aqui')
        
        const decoded = jwt.verify(authorization, JWT_SECRET)

        //console.log('passou aqui 1')
        //console.log(decoded)
        //console.log('passou aqui 2')

        const now = moment().unix()

        //console.log('passou aqui de novo')

        if (now > decoded.exp) {
            res.send({message: 'Token Expirado!'})
        }

        //console.log('passou aqui de novo outra vez')

        req.decoded = decoded

        //console.log('passou aqui de novo outra vez mais uma vez')

        //console.log(req.decoded)
        next()
    }        
}
module.exports = AuthMiddleware