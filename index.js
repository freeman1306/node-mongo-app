const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

// port var

const PORT = process.env.PORT || 5000


// hoisting a server, connect layout engine & DB

// create objet of application
const app = express()

// send params to view engine
const hbs = exphbs.create({
    default: 'main',
    extname: 'hbs'
})

// register rendering engine by key
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

//register views/layouts folder by key 'views'
app.set('views', 'views')


// extend reading of urls by express

app.use(express.urlencoded({extended: true}))

// connect one of middlewares due to 'use' of express
// register routes middlewares
app.use(todoRoutes)


async function start() {

    try {

        // connect to remote DB
        await mongoose.connect('mongodb+srv://freeman1306:zavalkin95@cluster0-bj5jb.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false
        })

        // start a server with the port
        app.listen(PORT, () => {
            console.log('Server has been started');

        })

    } catch (e) {

        console.log(e);

    }
}



start()