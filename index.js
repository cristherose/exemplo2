const express = require ('express')
const mongoose = require('mongoose');
const Dados = require('./models/dado')


const app = express()
const port = 3000

const mongoUrl = 'mongodb://localhost:27017/pessoa'
mongoose.connect(mongoUrl, { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  //lista de pessoa
  app.get('/read', async (req, res) => {
    const dados = await Dados.find({})
  
    res.json({ dados })
  })

  // nova pessoa
app.post('/create', async (req, res) => {     
  const dado = await Dados.create({name: 'Maria', dateN: '45/10/9898'   
   })    
  
   await dado.save()     
   res.send({ dado })
    
    })
  
  // mostrar  uma pesso pelo id
  app.get('/read/:id', async (req, res) => {
    const dado = await Dados.findById(req.params.id)
  
    res.json({ dado })
  })
  //actualização de um determinado dado na pessoa
  app.put('/update/:id', async (req, res) => {
    const dado = await Dados.findById(req.params.id)
  
    dado.name = 'renata'
     dado.dateN= '50/10/1985'
    
    await dado.save()
  
    res.send({ dado })
  })
  // apagar pessoa
  app.delete('/delete/:id', async (req, res) => {
    await Dados.deleteOne({ _id: req.params.id }, () => {
      console.log('Deleted from Mongo!')
    })
  
    res.send('Deleted!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
