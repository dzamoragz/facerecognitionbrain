const handleRegister = async (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('incorrect form submission');
  }

  const hash = bcrypt.hashSync(password, 10);

  try {
    const user = await db.transaction(async (trx) => {
      const [loginEmail] = await trx('login')
        .insert({ hash, email })
        .returning('email');

      const [newUser] = await trx('users')
        .insert({
          email: loginEmail.email,
          name,
          joined: new Date(),
        })
        .returning('*');

      return newUser;
    });

    return res.json(user);
  } catch (err) {
    console.error('register error:', err);
    return res.status(400).json('unable to register');
  }
};

module.exports = {
  handleRegister,
};