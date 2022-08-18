import { connectionDataBase } from '../../../data/connectionDataBase'
import {DataBaseErr} from '../../../error/customError'
import {userType, productType} from '../../../model/types'


export class PopulateTablesData extends connectionDataBase{

    public populateTablesUser = async (users: userType[]): Promise<void> => {

        try {

            await PopulateTablesData.connection("table_labecommerce_users")
            .insert(users)

        }
        catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }

    }


    public populateTablesProduct = async (product: productType[]): Promise<void> => {

        try {

            await PopulateTablesData.connection("table_labecommerce_products")
                .insert(product)
        }
        catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }

    }
}
