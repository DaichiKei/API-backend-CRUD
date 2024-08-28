const db = require('../configs/database');

const executeQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }

            connection.query(query, params, (error, results) => {
                connection.release();

                if (error) {
                    return reject(error);
                }

                resolve(results);
            });
        });
    });
};

const getAllUsers = () => {
    const SQLQuery = `SELECT * FROM users`;
    return executeQuery(SQLQuery);
};

const getUser = (username) => {
    const SQLQuery = `SELECT * FROM users WHERE username = ?`;
    return executeQuery(SQLQuery, [username]);
};

const createUser = (body) => {
    const SQLQuery = `INSERT INTO users (username, password, displayname, email, role) VALUES (?, ?, ?, ?, ?)`;
    return executeQuery(SQLQuery, [body.username, body.password, body.displayname, body.email, body.role]);
};

const updateUser = (body, username) => {
    const SQLQuery = `UPDATE users SET username = ?, password = ?, displayname = ?, email = ?, role = ? WHERE username = ?`;
    return executeQuery(SQLQuery, [body.username, body.password, body.displayname, body.email, body.role, username]);
};

const deleteUser = (username) => {
    const SQLQuery = `DELETE FROM users WHERE username = ?`;
    return executeQuery(SQLQuery, [username]);
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
