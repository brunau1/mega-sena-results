import BetResultsInterface from "../interfaces/BetResultsInterface"
import ItemData from "../interfaces/ItemDataInterface"
import dataValues from "./ItemDataController"

const setMegaSenaResults = ( betResults : BetResultsInterface[] ) : void => {
    betResults = dataValues.map((item : ItemData) : BetResultsInterface => {
        return {
            betValues : item.betValues
        }
    })
}
const betResults : BetResultsInterface[] = []
setMegaSenaResults(betResults)

export default betResults