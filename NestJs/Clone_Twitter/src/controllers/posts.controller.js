const res = require('express/lib/response')
const PostsServices = require('../services/posts.services')

module.exports = { 
    async create(req, res) {
        try {
            const { body } = req
            const { user } = body
            const response = await PostsServices.create(body, user)
            res.send(response)
    
        } catch (e) {
            console.error(e)
            res.status(500).send({ error: true})    
        }
    },
    async like(req, res) {
        try {
            const { id } = req.params
            const { id: idUser} = req.decoded
            const response = await PostsServices.like(id, idUser)
            res.send({response})

        } catch (e) {
            res.send({error: true, message: e.message})
        }       
    },
    async reply(req, res) {
        try {
            const { id }  = req.params
            const { body } = req
            const response = await PostsServices.reply(id, body)            
            res.send({response})

        } catch (e) {
            res.send({error: true, message: e.message})
        }       
    },
    async getReplies(req, res) {
        try {
            const { id }  = req.params
            const { body } = req        
            const response = await PostsServices.getReplies(id, body)            
            res.send({response})

        } catch (e) {
            res.send({error: true, message: e.message})
        }       
    },
    async getFeed(req, res) {
        try {
            const { id: idUser} = req.decoded
            //console.log(idUser)
            const response = await PostsServices.getFeed(idUser)            
            res.send({response})

        } catch (e) {
            res.send({error: true, message: e.message})
        }
    }
}