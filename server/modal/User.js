import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    iss: {
        type: String,
    },
    nbf: {
        type: Number,
    },
    aud: {
        type: String,
    },
    sub: {
        type: String,
    },
    email: {
        type: String,
    },
    email_verified: {
        type: Boolean,
    },
    azp: {
        type: String,
    },
    picture: {
        type: String,
    },
  
    name: {
        type: String,
    },
    
    family_name: {
        type: String,
    },
    given_name: {
        type: String,
    },
    iat: {
        type: Number,
    },
    exp: {
        type: Number,
    },
   
    jti: {
        type: String,
    },
})

const user = mongoose.model('user', userSchema);

export default user;
