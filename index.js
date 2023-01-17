import mysql from 'mysql2'

// connect to database
const db = mysql.createConnection({ // connect and call connection 'db'
    host: '127.0.0.1',
    database: 'bocacode',
    user: 'root',
    password: 'test123456'
})

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