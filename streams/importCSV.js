const fs = require("fs")

const csv = require("csv-parser")


const stream = fs.createReadStream("streams/file.csv")

const csvParse = csv({
    delimiter: ',',
    skipEmptyLines:true,
    fromLine:2
})


async function importar() {
    const linesParse = stream.pipe(csvParse)
    for await (const line of linesParse){
        const {title, description} = line

        await fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                title,
                description,
            })
        })
    }    
}

importar()

