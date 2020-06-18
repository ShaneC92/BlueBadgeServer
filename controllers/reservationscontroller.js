const router = require('express').Router()
const Reserve = require('../db').import('../models/reservations');


//CRUD (Create, Read, Update, Delete)

//GET
router.get('/', (req, res) => {
    Reserve.findAll()
        .then(reserve => res.status(200).json({
            reserve: reserve
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})


//POST
router.post('/', (req, res) => {
    const reservations = {
        arrivalTime: req.body.arrivalTime,
        description: req.body.description,
        shampoo: req.body.shampoo,
        shave: req.body.shave
    }

    Reserve.create(reservations)
        .then(reserve => res.status(200).json({
            reserve: reserve
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//QUERY BY ARRIVAL TIME
router.get('/time', (req, res) => {
    Reserve.findOne({
        where: {
            arrivalTime: req.params.time
        }
    })
    .then(reserve => res.status(200).json({
        reserve: reserve
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//UPDATE
router.put('/:id', (req, res) => {
    Reserve.update(req.body.reserve, {
        where: {
            id: req.params.id
        }
    })
    .then(reserve => res.status(200).json({
        reserve: reserve
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})


//DELETE
router.delete('/:id', (req, res) => {
    Reserve.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(reserve => res.status(200).json({
        reserve: reserve
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})


module.exports = router;