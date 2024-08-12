import express, { Request } from 'express'
const app = express()

app.use(express.json())


const userRouter= express.Router()
app.use('/', userRouter)
userRouter.get('/api/v1/user/create-user', (req, res)=>{

  const user= req.body;
  res.send({name:"jahid hasan"})

})


app.get('/', (req, res) => {
 
  res.send('jahid the best ')
})
app.post('/', (req, res)=>{
    console.log('jahid :',req.body);

    res.send('posting')

})

export default app;