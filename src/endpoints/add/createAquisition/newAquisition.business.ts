import { newAquisitionDTO } from '../../../model/types'
import { generateId } from '../../../services/generateId'
import { aquisition } from '../../../model/types'
import {CreateNewAquisitionData} from './newAquisition.data'

export class NewAquisitionBusiness {


    public createNewAquisition = async (input: newAquisitionDTO) => {


            const { user_id, product_id, quantity } = input

            const newAquisitionDataInstance = new CreateNewAquisitionData
            const amount = await newAquisitionDataInstance.queryPriceProduct(product_id)

            console.log("valor", amount)
            const total_price: number = amount * quantity

            console.log('total_price', total_price)

            const inputData: aquisition = {
                id: generateId(),
                user_id,
                product_id,
                quantity,
                total_price
            }

            const newAquisitionData = new CreateNewAquisitionData()
            newAquisitionData.insertNewAquisition(inputData)

    }
}