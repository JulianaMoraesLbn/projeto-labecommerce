import { DataBaseErr, MissingInformation } from '../../../error/customError'
import {connectionDataBase} from '../../../data/connectionDataBase'
import { Response } from 'express'

export class GetUserData extends connectionDataBase{

    public getUsers = async ():Promise<{}> => {
        
    try {
            const result = await GetUserData.connection()
                .select("*")
                .from("table_labecommerce_users")
    
            if (!result) { throw new MissingInformation }    

            return result
        }
        catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }
    }

}
