const register = (req,res)=>{
    const {name, email, password} = req.body;
    res.json({ 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        success : true
    })
}

module.exports = register;