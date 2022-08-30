import { GetProductData } from './getProduct.data'
import { getProductDTO } from '../../../model/types'

export class GetProductBusiness {
    public getProducts = async (inputData: getProductDTO): Promise<{}> => {

        const allProduct = new GetProductData()
        return await allProduct.allProductData(inputData)
    
    }
}

