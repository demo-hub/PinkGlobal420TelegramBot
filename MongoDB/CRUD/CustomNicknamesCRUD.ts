import * as mongoose from 'mongoose'
import * as botConfig from '../../botConfig'

const customNicknamesSchema = require('../Schemas/CustomNicknamesSchema')
const CustomNickname = mongoose.model('customNickname', customNicknamesSchema, 'customNickname')

export async function CreateCustomNickname(userID: string, userFirstName: string, userNickname: string, customNickname: string) {

    return new CustomNickname({
        userID,
        userFirstName,
        userNickname,
        customNickname
    }).save()
}

export async function GetNickname(userID: string) {

    var queryResult = await CustomNickname.findOne({ userID: userID })

    if (!queryResult) {
        return;
    }

    return queryResult.customNickname
}

export async function UpdateNickname(userID: string, newCustomNickname: string){

    await CustomNickname.updateOne({ userID: userID }, { customNickname: newCustomNickname })

}

