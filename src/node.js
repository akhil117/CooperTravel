const sql = require('mssql')

console.log('d')

const myFunction = async () => {
    try{
    
    await sql.connect('mssql://SA:anudeep123@@localhost/TestDB')
    const result = await sql.query('SELECT * FROM Inventory');
    console.log('sd')
    console.log(result)
    }catch(error){
        console.log(error)
    }

    
}

myFunction()
