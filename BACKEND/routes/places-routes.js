const express = require('express');

const router = express.Router();

const DUMMY_PLACES = {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://www.history.com/.image/t_share/MTU3ODc3NjU2NzUxNTgwODk1/this-day-in-history-05011931---empire-state-building-dedicated.jpg',
    location: {
        lat: 40.7484405,
        lng: -73.9878531
    },
    adress: '20 W 34th St, New York, NY 10001',
    creator: 'u1'
}

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId
    })
    res.json({ place });
});

module.exports = router;