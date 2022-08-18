import { Request, Response } from "express";
import { PopulateTablesBusiness } from "./populateTable.business"
import users from '../../../data/users.json'
import product from '../../../data/product.json'
import { MissingInformation } from '../../../error/customError'


export class PopulateTablesController {
    public populateTableUser = async (req:Request, res: Response) => {

        try{

            if(!users){
                throw new MissingInformation
            }

            const newPopulateTableBusiness = new PopulateTablesBusiness()
            newPopulateTableBusiness.populateTableUserBusiness(users)

        }catch(err:any){
            res.status(err.statusCode).send(err.message)
        }
    } 


    public populateTableProduct = async (req:Request, res: Response) => {

        try{
            const newPopulateTableBusiness = new PopulateTablesBusiness()
            newPopulateTableBusiness.populateTableProductBusiness(product)

        }catch(err:any){
            res.status(err.statusCode).send(err.message)
        }
    } 
}