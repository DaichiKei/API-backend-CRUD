const usersModel = require('../models/users');


const getAllUsers = async (req, res) => {
    try {
        const data = await usersModel.getAllUsers();
        res.json({
            message: 'Success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error Database!',
            error: error
        })
    }
}
const getUser = async (req, res) => {
    const { username } = req.params;
    try {
        const data = await usersModel.getUser(username);
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({
                message: 'Username tidak ditemukan!',
                data: data
            });
        }
        res.json({
            message: 'Success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error Database!',
            error: error
        })
    }
}
const createUser = async (req, res) => {
    const { body } = req;   
    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({
            message: 'Error undefined!',
            data: body
        });
    }
    if (!body.username || Object.keys(body.username).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Username!',
            data: body
        });
    }
    if (!body.password || Object.keys(body.password).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Password!',
            data: body
        });
    }
    if (!body.displayname || Object.keys(body.displayname).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Displayname!',
            data: body
        });
    }
    if (!body.email || Object.keys(body.email).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Email!',
            data: body
        });
    }
    if (!body.role || Object.keys(body.role).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Role!',
            data: body
        });
    } 
    try {
        const data = await usersModel.createUser(body);
        return res.json({
            message: 'Success Add!',
            data: data
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                message: 'Username sudah terdaftar!',
                error: error.message
            });
        }
        
        return res.status(500).json({
            message: 'Database Error!',
            error: error.message
        });
    }
};
const updateUser = async (req, res) => {
    const { username } = req.params;
    const { body } = req;
    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({
            message: 'Error undefined!',
            data: body
        });
    }
    if (!body.username || Object.keys(body.username).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Username!',
            data: body
        });
    }
    if (!body.password || Object.keys(body.password).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Password!',
            data: body
        });
    }
    if (!body.displayname || Object.keys(body.displayname).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Displayname!',
            data: body
        });
    }
    if (!body.email || Object.keys(body.email).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Email!',
            data: body
        });
    }
    if (!body.role || Object.keys(body.role).length === 0) {
        return res.status(400).json({
            message: 'Error Invalid Role!',
            data: body
        });
    }
    

    try {
        const data = await usersModel.updateUser(body, username);
        // console.log(username);
        res.json({
            message: 'Success Update!',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error Database!',
            error: error.message
        });
    }
};
const deleteUser = async (req, res) => {
    const { username } = req.params;
    if (!username || Object.keys(username).length === 0) {
        return res.status(400).json({
            message: 'Error undefined!',
            data: username
        });
    }

    try {
        const data = await usersModel.deleteUser(username);
        res.json({
            message: 'Success Delete!',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error Database!',
            error: error.message
        });
    }
};


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}