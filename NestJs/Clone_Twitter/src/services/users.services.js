const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')
const PostModel = require('../models/Post')

const createToken = (payload) => {
    const { JWT_SECRET } = process.env    

    return jwt.sign({
        iat: moment().unix(),
        exp: moment().add(1,'day').unix(),
        id: payload._id}, JWT_SECRET)}

module.exports = { 
    async create(data) {
        const { password } = data        
        const encryptedPassword = bcrypt.hashSync(password, 2)        
        return await UserModel.create({...data, password: encryptedPassword })
    },
    async profile(user) {
        const verPost = await PostModel.find({ user })
        //console.log(verPost.length)
        if (verPost.length == 0) {
            return await UserModel.find({ user }).populate('posts')
        } else {
            return await UserModel.aggregate([
            { $match: { user } },
            { $lookup:{ from: 'posts',
                        localField: 'posts',
                        foreignField: '_id',
                        as: 'posts'} },
            { $unwind: "$posts"},
            { $project: { posts: 1, name: 1, user: 1, bio: 1, profile_pic: 1, 
                          followers: 1, 
                          following: 1,
                          post: "$posts",
                          likesCount: {$size: "$posts.likes" }, 
                          repliesCount: {$size: "$posts.replies"} } },
            { $project: { posts: 0 } }])
        }
    },
    async login (data) {
        const user = await UserModel.findOne({ email: data.email })

        if (!user) {
            throw new Error('Usuário não existe!')
        }

        if (bcrypt.compareSync(data.password, user.password)) {
            return {token: createToken(user)}
        } else {
            throw new Error('Senha inválida!')
        }
    },
    async follow (id, idUser) {
        {/*const usertoFollow =*/} await UserModel.findByIdAndUpdate(id, { $push: { followers: idUser } })
        return await UserModel.findByIdAndUpdate(idUser, { $push: { following: id } })        
    }
}