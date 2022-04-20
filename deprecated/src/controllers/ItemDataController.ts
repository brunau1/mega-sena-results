import ItemData from "../interfaces/ItemDataInterface"

const dataValues : ItemData[] = require('../../resources/formatedData.json')

if(dataValues)
    console.log("Data values will be exported!!")
else
    console.log("Data values is empty!!")

export default dataValues