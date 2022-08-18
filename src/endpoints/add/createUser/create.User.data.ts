import { user } from '../../../model/types'
import { connectionDataBase } from '../../../data/connectionDataBase'
import {DataBaseErr} from '../../../error/customError'

export class CreateUserData extends connectionDataBase {

    public insertUser = async (inputData: user) => {

        try {

            const { id, name, email, password } = inputData
            await CreateUserData.connection('table_labecommerce_users')
                .insert({
                    id,
                    name,
                    email,
                    password
                })

        }catch(err:any) { 
            throw new DataBaseErr(err.sqlMessage)
        }
    }
}