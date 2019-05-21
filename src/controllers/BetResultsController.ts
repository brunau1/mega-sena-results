import BetResultsInterface from "../models/BetResultsInterface"
import ItemData from "../models/ItemDataInterface"
import { dataValues } from "./ItemDataController"

export function setMegaSenaResults( betResults : BetResultsInterface[] ) : void {
    betResults = dataValues.map((item : ItemData) : BetResultsInterface => {
        return {
            code : item.code,
            betValues : item.betValues,
            contAppeared: 0
        }
    })
}

