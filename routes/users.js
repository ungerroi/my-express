import express from 'express'
const router = express.Router()

const users = [{name: 'moshe', age: 40}, {name: 'david', age: 30}]

router.get('/', (req, res) => {
    res.json(users)
})

router.post('/', (req, res) => {
    users.push(req.body)
})

router.get('/:id', (req, res) => {
    const userId = req.params.id
    res.json(users[userId])
})

export default router