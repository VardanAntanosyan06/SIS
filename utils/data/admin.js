const bcrypt = require("bcrypt");


const Admins = [
    {
        email:"admin@example.com",
        password: bcrypt.hashSync("test1234", 10),
    }
]

module.exports = {
    Admins
}