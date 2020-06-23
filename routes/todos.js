
// take router function from express.js
const { Router } = require('express')
const Todo = require('../modals/Todo')
const router = Router()

// take content from response and display due to render() of express
router.get('/', async (req, res) => {
const todos = await Todo.find({})


res.render('index', {
    title: 'Index Todo',
    isIndex: true,
    todos
})
})


router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Todo',
        isCreate: true
    })
})
    

router.post('/create', async (req, res) => {
    const todo = new Todo({
      title: req.body.title
    })
    
    await todo.save()

    res.redirect('/')
    })

// export this module to external for working
module.exports = router