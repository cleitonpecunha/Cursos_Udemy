const moment = require('moment')
const jwt = require('jsonwebtoken')
const UserService = require('../services/users.services')
const usersServices = require('../services/users.services')

const createToken = (payload) => {
    const { JWT_SECRET } = process.env

    //console.log(process.env)

    return jwt.sign({
        iat: moment().unix(),
        exp: moment().add(1,'day').unix(),
        //id: payload._id}, 'clonetwitter')
        id: payload._id}, JWT_SECRET)}

module.exports = { 
    async create(req, res) {
        try {            
            const { body } = req
            const created = await UserService.create(body)
            res.send(created)        
    
        } catch (e) {
            res.handleHttpError(e)
        }
    },
    async profile(req, res) {
        try {
            const { user } = req.params
            //console.log(user)
            const profile = await UserService.profile(user)
            res.send(profile)

        } catch (e) {
            res.handleHttpError(e)            
        }        
    },
    async login(req, res) {
        try{            
            const { body } = req
            const user = await UserService.login(body)            
            res.send(user)

        } catch (e) {
            res.send({ error: true, message: e.message })
        }
    },
    async follow(req, res) {
        try{ 
            const { id } = req.params
            const { id: idUser } = req.decoded
            
            //console.log(id) // ID de que eu vou seguir
            //console.log(idUser) // ID de quem me segue
            
            const response = usersServices.follow(id, idUser)           
            res.send(response)

        } catch (e) {
            res.send({ error: true, message: e.message })
        }
    }
}