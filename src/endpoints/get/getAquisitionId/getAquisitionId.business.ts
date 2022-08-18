import { getAquisitionIdDTO } from '../../../model/types'
import { getAquisitionIdData } from './getAquisitionId.data'

export class NewAquisitionIdBusiness {
    public getAquisitionId = async (user_id: getAquisitionIdDTO) => {

        const aquisitionIdData = new getAquisitionIdData()
        aquisitionIdData.getAquisitionId(user_id)
    }
}