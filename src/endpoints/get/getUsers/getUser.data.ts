import { DataBaseErr, MissingInformation } from '../../../error/customError'
import {connectionDataBase} from '../../../data/connectionDataBase'
import { Response } from 'express'

export class GetUserData extends connectionDataBase{

    public getUsers = async (): Promise<void> => {

        try {

            const testeResult = await GetUserData.connection()
                .select("*")
                .from("table_labecommerce_users")
    
            //if (!result) { throw new MissingInformation }    

            console.log(testeResult)
        
        }
        catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }
    }

}
