import { createUserDTO, user } from '../../../model/types'
import { generateId } from '../../../services/generateId'
import { CreateUserData } from './create.User.data'
import { GenericError } from '../../../error/customError'

export class CreateUserBusiness {
    public createUser = async (input: createUserDTO) => {



            const { name, email, password } = input

            const inputData: user = {
                id: generateId(),
                name,
                email,
                password
            }

            const newUserData = new CreateUserData()
            newUserData.insertUser(inputData)

    }
}