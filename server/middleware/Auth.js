const jwt = require("jsonwebtoken");
const Token = require("../models/Token");


const validateRefreshToken  = async (req, res, next) => {
    const refreshToken = req.headers.authorization;
    const token = refreshToken && null;
    const res = await Token.find({hash:token})
    if(res){
        return res.status(401).json({err:"Invalid Token"});
    }
    else{
        const payload = jwt.verify(token, process.env.REFRESH_KEY);
        req.token = payload.token;
    }
    next()
}

const validateAccessToken = (req, res, next) => {
    const acc_token = req.body.access_token;
    try{
        const payload = jwt.verify(acc_token, process.env.ACCESS_KEY);
        req.user = payload;
        next();
    }
    catch(e){
        return res.status(401).json({err:"Invalid Token"});
    }   
}

const validateCSRFToken = (req, res, next) => {
    const csrf_token = req.body.csrfToken;
    try{
        const payload = jwt.verify(csrf_token, process.env.CSRF_KEY);
        req.csrf_payload = payload;
        next();
    }
    catch(e){
        return res.status(401).json({err:"Invalid Token"});
    }

}

module.exports = { validateRefreshToken, validateAccessToken, validateCSRFToken }