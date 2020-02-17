import * as mongoose from 'mongoose'

const nicknamesSchema = new mongoose.Schema({

    userID: {
        type: Number,
        required: [true, 'UserID is required']
    },

    userFirstName: {
        type: String,
        required: [true, 'User first name is required']
    },

    userNickname: {
        type: String,
        required: [false]
    },

    customNickname: {
        type: String,
        required: [false]
    }

})

module.exports = nicknamesSchema