const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Clients_schema = new Schema({
    mail : String,
    name :String,
})
const Clients  = mongoose.model('client' , Clients_schema)
module.exports = Clients 