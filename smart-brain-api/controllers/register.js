const handleRegister= (req,res,db,bcrypt)=>{
    console.log('handleRegister called', req.body);
    const {email,name,password}= req.body;
    if ( !email || !name || !password){
       console.error('register validation failed', { email, name, password });
       return res.status(400).json('incorrect form submission');
    }
    if (!db) {
      console.error('register error: database not configured');
      return res.status(500).json('unable to register');
    }
    const hash = bcrypt.hashSync(password,10);
    db.transaction(trx=>{
      trx.insert({
        hash,
        email
      }).into('login')
        .returning('email')
        .then(loginEmail=>{
            return trx('users').returning('*').insert({
                email: loginEmail[0].email,
                name,
                joined: new Date()
            }).then(user=>{
                res.json(user[0]);
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
        .catch(err => {
            console.error('register error:', err);
            return res.status(500).json('unable to register')
        })
}

module.exports = {
    handleRegister
}