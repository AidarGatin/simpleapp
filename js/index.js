const express = require('express');
const sequelize = require('./util/database');
const User = require('./models/user');
const app = express()

app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  console.log('New Home request')
  res.send('Hello Docker World!')
})

app.post('/users', async (req,res)=> {
    try {
        const user = await User.create({
            username : req.body.username,
            email: req.body.email
        }) 
        return res.status(201).json(user)
    } catch (error){
        return res.status(500).json(error)
    }
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

sequelize.sync({force:false})
    .then(() => app.listen(process.env.EXTERNALPORT))
    .catch(err => console.log(err));