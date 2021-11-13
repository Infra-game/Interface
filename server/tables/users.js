module.exports = (app,db) => {
    app.get('/users', (req, res) => {
        db.getConnection((err, connection) => {
            if(err) throw err;
            connection.query('SELECT * FROM users', (err, result) => {
                connection.release();
                if(!err) {
                    res.send(result);
                } else {
                    console.log(err);
                }
            })
        })
    })

    app.post("/users/add", (req,res) => {
        db.getConnection((err, connection) => {
            if(err) throw err;

            const params = {
                email : req.body.email,
                username : req.body.username,
                password : req.body.password,
            };

            connection.query('INSERT INTO users SET ?', params, (err) => {
                connection.release()

                if(!err) {
                    res.json({error: false, message:`L'utilisateur ${params.username} a été ajouté !`});
                } else {
                    res.json({error : true, message: "L'utilisateur n'a pas pu être ajouté."});
                    console.log(err);
                }
            })
        })
    })
}