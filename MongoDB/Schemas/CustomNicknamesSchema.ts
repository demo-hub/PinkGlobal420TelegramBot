import * as mongoose from 'mongoose'

const nicknamesSchema = new mongoose.Schema({

    userID: {
        type: Number,
        required: [true, 'UserID is required']
    },

    customNickname: {
        type: String,
        required: [true]
    }

})

module.exports = nicknamesSchema