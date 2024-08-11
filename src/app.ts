import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('Hell ')
})

export default app;