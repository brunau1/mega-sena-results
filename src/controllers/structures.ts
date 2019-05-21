import ItemData from "../models/ItemDataInterface"
import BetNumbers from "../models/BetNumbersInterface"

export const dataValues : ItemData[] = require('../../resources/formatedData.json')

export const betValues : BetNumbers[] = dataValues.map((item : ItemData) : BetNumbers =>{
    return {
        code : item.code,
        betNumbers : item.betValues,
        contAppeared: 0
    }
})

console.log(JSON.stringify(betValues, null, 2))