const db = require('../../config/db');
const {log} = require("nodemon/lib/utils");
const mailer = require('../../config/mail')

const conn = db.init();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.email = (req, res) => {
    const email = req.params.email;
    const code = getRandomIntInclusive(1111, 9999)
    mailer.sendGmail(email, code);
    res.send({code: code})
}


exports.login = (req, res) => {
    sql = " SELECT * FROM admin_id WHERE ID = ?";
    conn.query(sql, [req.params.id], (err, log) => {
            try {
                if (log[0].id == req.params.id) {
                    if (log[0].pwd == req.params.password) {
                        res.send({isLogin: "true", name: log[0].name, id: log[0].id})
                    } else res.send({isLogin: "pwd"})
                } else res.send({isLogin: "error"})
            } catch (err) {
                console.log('err : ' + err)
                res.send({isLogin: "id"})
            }
        }
    )
}

exports.signup = (req, res) => {
    console.log("test")
    sql = " INSERT INTO `admin_id` (id, pwd, name, email, companyname) values (?, ?, ?, ?, ?)";
    conn.query(sql, [req.params.id, req.params.pwd, req.params.name, req.params.email, req.params.companyname], (err, req) => {
        if (err) console.log(err);
        res.send({success: "ok"});
    })
}

exports.id_overlap_search = (req, res) => {
    sql = " SELECT * FROM admin_id WHERE id = ?";
    conn.query(sql, (req.params.id), (err, log) => {
        if (err) console.log(err);
        try {
            console.log(log[0].id);
            res.send({id_overlap: true})
        } catch (e) {
            res.send({id_overlap: false})
        }
    })
}

