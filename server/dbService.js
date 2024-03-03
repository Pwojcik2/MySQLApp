const mysql = require('mysql');
const dotenv = require('dotenv')
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

connection.connect((err) => {
    if(err){
        console.log(err.message)
    }
    console.log('db' + connection.state)
})

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService()
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM names;"

                connection.query(query, (err, results) => {
                    if(err) reject(new Error(err.message))
                    resolve(results)
                })
            })
            
            return response;
            console.log(response)

        } catch(err) {
            console.log(err)
        }
    }

    async insertNewName(name) {
        try {
            const dateCreated = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO names (name, date_created) VALUES (?, ?);";

                connection.query(query, [name. dateCreated] ,(err, result) => {
                    if(err) reject(new Error(err.message))
                    resolve(result.insertId)
                })
            })
            console.log(insertId)
            // return response;

        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = DbService;