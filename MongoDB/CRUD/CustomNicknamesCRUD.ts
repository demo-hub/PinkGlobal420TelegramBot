import * as mongoose from 'mongoose'
import * as botConfig from '../../botConfig'

const customNicknamesSchema = require('../Schemas/CustomNicknamesSchema')
const CustomNickname = mongoose.model('customNickname', customNicknamesSchema, 'customNickname')

export async function CreateCustomNickname(userID: string, userFirstName: string, nickname: string, customNickname: string) {

    return new CustomNickname({
        userID,
        userFirstName,
        nickname,
        customNickname
    }).save()
}

