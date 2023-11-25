// file: src/api-client/mock/items/index.ts

// import a reference to the app config
import { config } from '@/config'
import { ItemsApiClientInterface, ItemsApiClientModel } from '../../models'

// instantiate the ItemsApiClient pointing at the url that returns static json live data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(config.items.apiClientOptions)
// export our instance
export { itemsApiClient }
