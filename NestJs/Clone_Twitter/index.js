{/*const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200,
    res.setHeader('Content-Type','Text/plan'),
    res.end('**** Hello World! ****')
})

const port = 3000
const hostname = '127.0.0.1'

server.listen(port, hostname, () => {
    console.log('Estou escutando!')
})*/}

const express = require('express')
const mongooseconnector = require('./mongoose-connector')
const { create: createPosts, like, reply, getReplies, getFeed } = require('./src/controllers/posts.controller')
const { create: createUsers, profile, login, follow } = require('./src/controllers/user.controller')
const HandleHttpError = require('./src/middlewares/handle-http-error')
const AuthMiddleware = require('./src/middlewares/auth-middleware')
dotenv = require('dotenv').config()

//const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost:27017/clone-twitter', {useNewUrlParser: true})

{/*const Posts = mongoose.model('Post', {
    content: String,
    user: String,
    create_date: Date,
    visible: Boolean
})*/}

{/*const postsInstance = new Posts({
    content: 'Este é o meu post',
    user: '@fulanodetal',
    create_date: new Date,
    visible: true   
}) 

postsInstance
    .save()
    .then((variable) => {
        console.log(variable)
        console.log('Salve!!!!')
    })
*/}

const app = express()

const {HTTP_PORT, MONGO_URI} = process.env

mongooseconnector(MONGO_URI)

app.use(express.json())
app.use(HandleHttpError)
app.use(AuthMiddleware)

console.log(process.env.MONGO_URI)

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.post('/login', login) // validação de login, para geração de token
app.post('/users', createUsers) // criação de usuários
app.post('/posts', createPosts) // criação de posts de usuários
app.get('/profile/:user', profile) // ver histórico de usuarios, post... likes, follow, following
app.post('/posts/:id/like', like) // curtir posts de usuário
app.post('/posts/:id/reply', reply) // popula array "replay" dos posts com "id" de post de usuario
app.get('/posts/:id/replies', getReplies) // mostrar as resposta de replay de posts de usuários
app.get('/posts/feed', getFeed)
app.post('/users/:id/follow', follow) // seguir e seguindo outros usuários

app.listen(HTTP_PORT, () => {
    console.log(`Estou conectado na porta ${HTTP_PORT}`)
})
