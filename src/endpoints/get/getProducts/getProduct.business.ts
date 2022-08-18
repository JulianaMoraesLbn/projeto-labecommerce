import { GetProductData } from './getProduct.data'
import { getProductDTO } from '../../../model/types'

export class GetProductBusiness {
    public getProducts = async (inputData: getProductDTO): Promise<void> => {

        const allProduct = new GetProductData()
        allProduct.allProductData(inputData)
    
    }
}

