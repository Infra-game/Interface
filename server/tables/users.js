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
                fullName : req.body.fullName,
                role : req.body.role
            };

            connection.query('INSERT INTO users SET ?', params, (err) => {
                connection.release()

                if(!err) {
                    res.json({error: false, message:`L'utilisateur ${params.username} a été ajouté.`});
                } else {
                    res.json({error : true, message: "L'utilisateur n'a pas pu être ajouté."});
                    console.log(err);
                }
            })
        })
    })

    app.delete('/users/:id', (req, res) => {
        console.log("here");
        db.getConnection((err, connection) => {
            if(err) throw err;

            connection.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
                if(!err) {
                    res.json({error : false, message : `L'utilisateur ${[req.params.id]} a été supprimé.`});

                    connection.query('SELECT MAX(id) FROM users', (err, result) => {
                        if(!err) {
                            const maxId = result[0]["MAX(id)"]===null ? 0 : result[0]["MAX(id)"];

                            connection.query('ALTER TABLE users AUTO_INCREMENT = ?', [maxId], (err) => {
                                connection.release()
                                if(err) {
                                    console.log(err);
                                }
                            })
                        } else {
                            console.log(err);
                        }
                    })
                } else {
                    res.json({error : true, message : `L'utilisateur ${[req.params.id]} n'a pas pu être supprimé.`})
                    console.log(err);
                }
            })
        })
    })
}