let users = [
    { id: 1, name: 'rifaldo', umur: 22 },
    { id: 2, name: 'reza', umur: 21 },
    { id: 3, name: 'saputra', umur: 20 },
]

module.exports = {
    getAllUser: (req, res) => {
        res.send(users)
    },

    getIdUser: (req, res) => {
        const { id } = req.params;
        console.log(id);

        const user = users.find(item => item.id == id)
        if (!user) {
            res.status(400).send({
                message: "Failed",
            })
            return
        }
        res.send(user)
    },

    addUser: (req, res) => {
        // res.send(users)
    },

    deleteUser: (req, res) => {
        // res.send(users)
    },

    updateUser: (req, res) => {
        // res.send(users)
    },
}