const db = require('../connection');


const register = (req, res) => {
    const { mmsi, imo, ship_name, place_build, year_build } = req.body;
    if (!mmsi & !imo & !ship_name & !place_build & !year_build) {
        res.status(400).json({
            message: 'data yang anda kirim kurang lengkap!',
            success: false,
            data: null,
        })

    }
    const sql = `INSERT INTO ship (mmsi,imo,ship_name,place_build,year_build) VALUES ('${mmsi}','${imo}','${ship_name}','${place_build},'${year_build}')`;
    db.query(sql, (err, fields) => {
        if (err) {
            res.status(400).json({
                message: err,
                success: false,
                data: null,
            })
        };
        res.status(200).json({
            message: 'Data sudah masuk',
            success: true,
            data: fields,
        })


    })
}

module.exports = { register };