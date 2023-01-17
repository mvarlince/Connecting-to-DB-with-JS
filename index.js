import mysql from 'mysql2'
import { password, dbConnection } from './secrets.js'

// connect to database
const db = mysql.createConnection( dbConnection // connect and call connection 'db'
)

console.log("We are connected!")

db.query('update users set first_name = "Water" where id = 3', (err) => {
    if (err) console.log("UPDATE ERROR ->", err)
    else console.log("UPDATE DONE")
})

// HOW COME NO ELSE STATEMENT HERE?
db.query("select * from users", (err, results) => {
    if (err) console.log('ERROR ->', err)
    console.table(results)
})

console.log("the end. ")

db.end()