import express from 'express'   

const routes = express.Router()

routes.get('/users', (req, res) => {
    return res.json({msg: "Ola Mundão"})
})

export default routes