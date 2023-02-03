const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware

app.use(express.json())

app.get('/hello', (req, res) => res.send('Hello World!'))

app.use('/api/vs1/tasks', tasks)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
