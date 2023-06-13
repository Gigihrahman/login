const db = require('../connection');

const vesselDetail = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT mmsi,imo,ship_name,builder,place_build,year_build FROM ship where id_company = ${id}`;
    db.query(sql, (err, fields) => {
        if (err) {
            res.status(500).json({
                message: err,
                success: false,
                data: null,
            })
        }
        res.status(200).json({
            message: 'data sudah masuk',
            success: true,
            data: fields,
        })
    })
}

module.exports = {
    vesselDetail
}