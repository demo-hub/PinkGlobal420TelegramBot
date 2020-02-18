import * as mongoose from 'mongoose'

const customNicknamesSchema = require('../Schemas/CustomNicknamesSchema')
const CustomNickname = mongoose.model('customNickname', customNicknamesSchema, 'customNickname')

export async function CreateCustomNickname(userID: string, customNickname: string) {

    return new CustomNickname({
        userID,
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

export async function DeleteEntry(userID: string) {

    await CustomNickname.deleteOne({userID: userID})
}

