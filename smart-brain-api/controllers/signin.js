
const handleSignin = (req, res, db, bcrypt) => {
  const { email, password } = req.body;

  // Validación básica
  if (!email || !password) {
    return res.status(400).json('incorrect form submission');
  }

  db.select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then(data => {
      if (data.length) {
        const isValid = bcrypt.compareSync(password, data[0].hash);

        if (isValid) {
          return db.select('*')
            .from('users')
            .where('email', '=', email)
            .then(user => res.json(user[0]))
            .catch(err => res.status(400).json('unable to get user'));
        } else {
          return res.status(400).json('wrong credentials');
        }

      } else {
        return res.status(400).json('wrong credentials');
      }
    })
    .catch(err => res.status(400).json('error signing in'));
};


module.exports= {
    handleSignin
}