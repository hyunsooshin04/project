const db = require('../../config/db');
const {log} = require("nodemon/lib/utils");
const conn = db.init();

exports.list = (req, res) => {
    const body = req.query;
    let company = "";
    let where = "";
    if (body.option == "all") {
        if (body.keyword != "") {
            where += ` AND name like '%${body.keyword}%' or tell like '%${body.keyword}%' or id like '%${body.keyword}%' or gender like '%${body.keyword}%' or email like '%${body.keyword}%' or position like '%${body.keyword}%' or department like '%${body.keyword}%'`;
        }
    } else if (body.option == "name") {
        if (body.keyword != "") {
            where += ` AND name like '%${body.keyword}%' `;
        }
    } else if (body.option == "department") {
        if (body.keyword != "") {
            where += ` AND department like '%${body.keyword}%'`
        }
    } else if (body.option == "email") {
        if (body.keyword != "") {
            where += ` AND email like '%${body.keyword}%' `
        }
    } else if (body.option == "id") {
        if (body.keyword != "") {
            where += ` AND id like '%${body.keyword}%' `
        }
    } else if (body.option == "tell") {
        if (body.keyword != "") {
            where += ` AND tell like '%${body.keyword}%' `
        }
    } else if (body.option == "position") {
        if (body.keyword != "") {
            where += ` AND position like '%${body.keyword}%'`
        }
    } else if (body.option == "gender") {
        if (body.keyword != "") {
            where += ` AND gender like '%${body.keyword}%' `
        }
    }
    sql = " SELECT * FROM admin_id WHERE id = ?";
    conn.query(sql, (body.id), (err, log) => {
        if (err) console.log(err);
        try {
            sql = ` SELECT * FROM user_id WHERE company = ? ${where}`;
            if (err) console.log(err);
            company = log[0].companyname;
            conn.query(sql, (log[0].companyname), (err, log) => {
                if (err) console.log(err);
                res.send({list: log, company: company})
            })
        } catch (e) {
            console.log("권한없는 접근")
        }
    })
}

exports.create_user = (req, res) => {
    const body = req.query;
    sql = " INSERT INTO user_id (`id`, `pwd`, `name`, `email`, `position`, `gender`, `department`, `tell`, `company`, `joindate`) values (?, ?, ?, ?, ?, ?, ?, ?, ?, now())"
    conn.query(sql, [body.id, body.pwd, body.name, body.email, body.position, body.gender, body.department, body.tell, body.company], (err, log) => {
        if (err) console.log(err);
        res.send({ok: "ok"})
    })
}

exports.delete_user = (req, res) => {
    const body = req.query;
    for (let i = 0; i < body.arr.length; i++) {
        sql = " delete from user_id where id = ?";
        conn.query(sql, [body.arr[i]], (err, log) => {
            if (err) console.log(err);
        })
    }
    res.send({ok: "ok"})
}