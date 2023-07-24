const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)

const encryptPassword = password => {
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

const comparePassword = (dbHash, inputPswd) => {
  return bcrypt.compareSync(inputPswd, dbHash)
}

module.exports = { encryptPassword, comparePassword }
