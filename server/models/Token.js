const mongoose = reuire("mongoose");


const TokenSchema = new mongoose.Schema({
    hash:{type:String}
}, {timestamps:true});

const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;