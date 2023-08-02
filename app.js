
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'



// routers

import screenRoutes from './routes/screen.js'




const app = express()
app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))


/// routes

app.use('/api/screen', screenRoutes)





// db connection
mongoose.connect('mongodb+srv://atul:ermechcoder@cluster0.fq4j3um.mongodb.net/Database?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB')
    })
    .catch(err => {
        console.log(err)
    })

    app.get('/', (req, res) => {
        res.send('server is running')
    })

const PORT=5011
app.listen(PORT, (req,res) => {
    console.log(`Server started on port ${PORT}`)
})






