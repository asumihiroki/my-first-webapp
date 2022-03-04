const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const SampleDb = require('./sample-db')

const productRoutes = require('./routes/products')


mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        const sampleDb = new SampleDb()
        sampleDb.initDb()
    }
)

const app = express()

// /api/v1/productを叩いた時に、productRoutesのrouter.getが''（空)の時にtrueを返す
app.use('/api/v1/products', productRoutes)



const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am runnning!')
})

