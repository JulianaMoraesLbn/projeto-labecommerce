import { getAquisitionIdDTO } from '../../../model/types'
import { getAquisitionIdData } from './getAquisitionId.data'

export class NewAquisitionIdBusiness {
    public getAquisitionId = async (user_id: getAquisitionIdDTO) => {

        const aquisitionIdData = new getAquisitionIdData()
        return await aquisitionIdData.getAquisitionId(user_id)
    }
}