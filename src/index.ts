import app from "./controller/app"
import { CreateProductController } from './endpoints/add/createProducts/createProducts.controller'
import { CreateUserController } from './endpoints/add/createUser/createUser.controller'
import { NewAquisitionController } from './endpoints/add/createAquisition/newAquisition.controller'
import { GetProductController } from "./endpoints/get/getProducts/getProduct.controller"
import { NewAquisitionIdController } from "./endpoints/get/getAquisitionId/getAquisitionId.controller"
import {GetUserController} from './endpoints/get/getUsers/getUser.controller'
import { PopulateTablesController } from "./endpoints/add/populateTables/populateTables.controller"


const addProductController = new CreateProductController()
const addUserController = new CreateUserController()
const addNewAquisition = new NewAquisitionController()
const getAllUsers = new GetUserController()
const getAllProducts = new GetProductController()
const populateUp = new PopulateTablesController()
const getAquisitionId = new NewAquisitionIdController()

app.get('/users', getAllUsers.getUser)
app.get('/products', getAllProducts.getProducts)
app.get('/users/purchases/:user_id', getAquisitionId.getAquisitionId)
app.post('/products', addProductController.createProducts)
app.post('/users', addUserController.createUser)
app.post('/purchase', addNewAquisition.newAquisition)
app.post('/populate/user', populateUp.populateTableUser)
app.post('/populate/product', populateUp.populateTableProduct)