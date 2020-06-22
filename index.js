const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

// port var

const PORT = process.env.PORT || 5000


// hoisting a server, connect layout engine & DB
const app = express()
const hbs = exphbs.create({
    default: 'main',
    extname: 'hbs'
})

// register rendering engine by key
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

//register views/layouts folder by key 'views'
app.set('views', 'views')



async function start() {

    try {

        // connect to remote DB
        await mongoose.connect('mongodb+srv://freeman1306:zavalkin95@cluster0-bj5jb.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false
        })


        app.listen(PORT, () => {
            console.log('Server has been started');

        })

    } catch (e) {

        console.log(e);

    }
}



start()