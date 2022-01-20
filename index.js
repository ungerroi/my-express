import express from 'express'
import usersRouter from './routes/users.js'
const app = express()
const port = 3040
  


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(function (req, res, next) {
    console.log(req.url)
    next()
})

app.use('/users', usersRouter)

app.get('/*', (req, res, next) => {
    // res.status(204)
    // res.json({ message: 'server error'})
    // res.download('book.txt')
    res.render('index', {title: 'hello world'})
})



app.get('/posts', (req, res) => {
    // res.json(posts)
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find 404!")
})


app.listen(port, function () {
    console.log(`${new Date()}listening in port ${port} - hi mom!!`)
})