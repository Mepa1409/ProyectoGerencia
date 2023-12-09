import User from '../models/usermodel.js'


export const register = async(req,res) =>{
    const {username,email,phone,password} =req.body

    const newUser = new User({
        username,
        email,
        phone,
        password
    })
    await newUser.save()
    res.send('registrando')
}

export const login = (req,res) =>res.send("login")


