const systemFile = require('fs')

const values = `` // insert the data here - consult https://asloterias.com.br/lista-de-resultados-da-mega-sena

const jsonFormatedValues = values.map(item=>{
    return {
        code : parseInt(item.slice(0, 4)),
        date : {
            day : parseInt(item.slice(7, 9)),
            month : parseInt(item.slice(10, 13)),
            year : parseInt(item.slice(13, 17))
        },
        betValues : item.slice(20).split(' ').map(value=>parseInt(value))
    }
}).reverse()

try{
    systemFile.writeFileSync('./resources/formatedData.json', JSON.stringify(jsonFormatedValues, null, 2), 'utf-8')
    console.log("Success!! File created")
}catch(error){
    console.log("Error!! It's not possible!!")
}