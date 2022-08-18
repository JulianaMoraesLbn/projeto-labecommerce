import { PopulateTablesData } from "./populateTables.data"
import { userType, productType } from '../../../model/types'


export class PopulateTablesBusiness {
    public populateTableUserBusiness = async (users: userType[]) => {
       
        const newPopulateTableData = new PopulateTablesData()
        newPopulateTableData.populateTablesUser(users)
    } 


    public populateTableProductBusiness = async (product: productType[]) => {
       
        const newPopulateTableData = new PopulateTablesData()
        newPopulateTableData.populateTablesProduct(product)
    } 
}