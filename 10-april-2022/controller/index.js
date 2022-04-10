const { connectDb } = require('../db/index')
const saveFormData = async (req, res) => {
    try {
        const db = await connectDb()
        const { name, email, phone, favoriteColor, favoriteFood, feedback } = req.body
        console.log(db)
        db.collection('collections').insertOne({
            name,
            email,
            phone: phone.toString(),
            favoriteColor,
            favoriteFood,
            feedback
        }, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message })
            }
            return res.send("Submitted")
        })
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

module.exports = { saveFormData }