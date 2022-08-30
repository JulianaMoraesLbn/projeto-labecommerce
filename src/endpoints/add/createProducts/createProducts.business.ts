import { GenericError } from '../../../error/customError'
import {createProductDTO, product} from '../../../model/types'
import { generateId } from '../../../services/generateId'
import {CreateProductData} from './createProducts.data'


export class CreateProductBusiness {
    public createProducts = async (input: createProductDTO) => {
     

            const { name, price, image_url } = input
            
            const inputData: product = {
                id: generateId(),
                name,
                price,
                image_url
            }
            
            const newProductData = new CreateProductData()
            await newProductData.insertProduct(inputData)

    }


}