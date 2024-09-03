var sql = require("mysql");

var connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "Rz8hqn1dK4",
    password: "nd0WKO3xeO",
    database: "Rz8hqn1dK4"
});
connection.connect((err) => {
    if (err) throw err;
    console.log("connected");
    connection.query("SELECT Student_Detail.FirstName,Student_Height.Height FROM Student_Detail JOIN Student_Height ON Student_Detail.Reg_ID=Student_Height.Reg_ID", function (err, result) {
        if (err) throw err;
        console.log(result);
    });

});
