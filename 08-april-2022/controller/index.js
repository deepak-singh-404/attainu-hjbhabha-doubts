const Collection = require('../model/collection')

const saveFormData = async (req, res) => {
    try {
        const { name, email, phone, favoriteColor, favoriteFood, feedback } = req.body
        const data = await new Collection({
            name,
            email,
            phone: phone.toString(),
            favoriteColor,
            favoriteFood,
            feedback
        })
        await data.save()
        return res.send("Submitted")
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

module.exports = { saveFormData }