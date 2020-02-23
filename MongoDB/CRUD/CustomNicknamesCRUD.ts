import * as mongoose from "mongoose";

const customNicknamesSchema = require("../Schemas/CustomNicknamesSchema.ts");
const CustomNickname = mongoose.model(
  "customNickname",
  customNicknamesSchema,
  "customNickname"
);

export async function CreateCustomNickname(
  userID: string,
  customNickname: string
) {
  return new CustomNickname({
    userID,
    customNickname
  }).save();
}

export async function GetUserByID(userID: string) {
  var queryResult = await CustomNickname.findOne({ userID: userID }).then(
    nickname => {
      return nickname;
    }
  );

  if (!queryResult) {
    return;
  }

  return queryResult.customNickname;
}

export async function UpdateNickname(
  userID: string,
  newCustomNickname: string
) {
  await CustomNickname.updateOne(
    { userID: userID },
    { customNickname: newCustomNickname }
  );
}

export async function DeleteEntry(userID: string) {
  await CustomNickname.deleteOne({ userID: userID });
}

export async function getUserByNickname(customNickname: string) {
  var queryResult = await CustomNickname.findOne({
    customNickname: customNickname
  }).then(user => {
    return user;
  });

  return queryResult;
}
