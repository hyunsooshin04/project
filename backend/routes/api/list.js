const db = require('../../config/db');
const {log} = require("nodemon/lib/utils");
const conn = db.init();

exports.list = (req, res) => {
    const body = req.query;
    let company = "";
    sql = " SELECT * FROM admin_id WHERE id = ?";
    conn.query(sql, (body.id), (err, log) => {
        sql = " SELECT * FROM user_id WHERE company = ?";
        conn.query(sql, (log[0].companyname), (err, log) => {
            res.send({list: log})
        })
    })
}