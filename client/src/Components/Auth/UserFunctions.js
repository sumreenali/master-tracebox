import axios from 'axios'

export const register = newUser =>{
    return axios
    .post('/üser/register',{
        name: newUser.name,
        email: newUser.email,
        password:newUser.password,
        role:newUser.role
    }).then(res =>{
        console.log('Registered!')
    })
}
export const login = user =>{
    return axios
        .post('/user/login',{
            email:user.email,
            password:user.password
        })
        .then(res =>{
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err=>{
            console.log(err)
        })
}