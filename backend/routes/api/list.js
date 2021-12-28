const db = require('../../config/db');
const {log} = require("nodemon/lib/utils");
const conn = db.init();

exports.list = (req, res) => {
    const body = req.query;
    let company = "";
    sql = " SELECT * FROM admin_id WHERE id = ?";
    conn.query(sql, (body.id), (err, log) => {
        if (err) console.log(err);
        try {
            sql = " SELECT * FROM user_id WHERE company = ?";
            if (err) console.log(err);
            company = log[0].companyname;
            conn.query(sql, (log[0].companyname), (err, log) => {
                res.send({list: log, company: company})
            })
        } catch (e) {
            console.log("권한없는 접근")
        }
    })
}