import DataStructureInterface from "../interfaces/DataStructureInterface"

const dataStructure: DataStructureInterface[] = []

for (let i = 0; i < 60; i++) {
    dataStructure[i].betNumber = i + 1
    dataStructure[i].contAppeared.appearGlobalContext = 0
    for (let j = 0; j < 6; j++) {
        dataStructure[i].contAppeared.appearPerCase[j] = 0
    }
}

export default dataStructure