const db = require('../connection')
const jwt = require("jsonwebtoken");


const login = (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        const sql = `SELECT * FROM companies where username ='${username}' && password = '${password}' `;
        console.log(sql)
        db.query(sql, (err, fields) => {
            console.log(fields);

            let hasil = fields;
            if (err) throw err;
            if (fields < 0) {
                res.status(404).json({
                    message: 'Password tidak sama!',
                    success: false,
                    data: null,
                });
            }

            token = jwt.sign({
                id: fields.id_company
            }, 'secretkey');

            res.status(201).json({
                message: 'Signup berhasil',
                success: true,
                data: hasil,
                token: token
            });
        })

    } catch (error) {
        console.log(error)
    }
}

const logout = async (req, res) => {
    try {
        const token = req.headers["token"];
        const decoded = jwt.verify(token, "secretkey");
        const id = decoded.id;
        const t = jwt.sign({ id: id }, 'secretkey', { expiresIn: '1s' });
        res.status(200).json({
            message: 'Logout Berhasil',
            success: true,
            data: null
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            data: null,
        });
    }
}




module.exports = { login, logout };