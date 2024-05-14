import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()
const port = 3000


app.use(express.json())
app.use(cors())


const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    job: String,
    age: Number
});

const UserModel = mongoose.model('User', userSchema);

app.get('/user', async (req, res) => {
    const user = await UserModel.find()
    res.send(user)
})
app.get('/user/:id', async (req, res) => {
    const {id} = req.params
    const user = await UserModel.findById(id)
    res.send(user)
})
app.post('/user', async(req, res) => {
    const obj=req.body
    const user = new UserModel(obj)
    await user.save()
    res.send(user)
})
app.put('/user/:id',async (req, res) => {
    const {id}=req.params
    const obj=req.body
    const user = await UserModel.findByIdAndUpdate(id,obj)
    res.send(user)  
})
app.delete('/user/:id', async(req, res) => {
    const {id}=req.params
    const user = await UserModel.findByIdAndDelete(id)
    res.send(user)
})

mongoose.connect('mongodb+srv://bd82bns4p:bd82bns4p@nebi.hxhhfzi.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})