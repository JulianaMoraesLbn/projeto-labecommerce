import { connectionDataBase } from "../../../data/connectionDataBase";
import { getAquisitionIdDTO } from "../../../model/types";
import { DataBaseErr, MissingInformation } from '../../../error/customError'


export class getAquisitionIdData extends connectionDataBase {
    public getAquisitionId = async (user_id: getAquisitionIdDTO) => {
        
        try{
            //console.log('id', user_id.user_id) está chegando como objeto, não consegui desestruturar

            const result = getAquisitionIdData.connection.raw(`SELECT * FROM table_labecommerce_users INNER JOIN table_labecommerce_aquisition ON table_labecommerce_users.id = table_labecommerce_aquisition.user_id WHERE table_labecommerce_users.id = 001`)

           /*  const result = getAquisitionIdData.connection().select('*').from('table_labecommerce_users')
            .innerJoin('table_labecommerce_aquisition', 'table_labecommerce_aquisition.user_id', 'table_labecommerce_users.id').where('id', user_id.user_id) */

            if(!result){
                throw new MissingInformation
            }

            //console.log('result', result)

        }catch(err: any){
            throw new DataBaseErr(err.sqlMessage)
        }
    } 
}