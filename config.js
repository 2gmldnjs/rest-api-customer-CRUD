const db_connection ={
    PORT:4000,
    DB:{
        host: "localhost",
        user: "root",
        database: "customers", //스키마
        password: "root",
        port: "3306"
    }
}
module.exports = {db_connection}