import BetNumbers from "../models/BetNumbersInterface"
import ItemData from "../models/ItemDataInterface"
import { dataValues } from "./ItemDataController"

export const betValues : BetNumbers[] = dataValues.map((item : ItemData) : BetNumbers =>{
    return {
        code : item.code,
        betValues : item.betValues,
        contAppeared: 0
    }
})
