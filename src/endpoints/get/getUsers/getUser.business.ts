import { GetUserData } from './getUser.data'

export class GetUserBusiness {
    public getUser = async () => {

        const newGetUserData = new GetUserData()
        return await newGetUserData.getUsers()
    }
}