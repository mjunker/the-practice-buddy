import express = require('express');
import exercise = require('../model/exercise');
let router = express.Router();

import SimpleExercise = exercise.SimpleExercise;
import repository = exercise.repository;

router.get('/', (req, res) => {
    repository.find((err, exercises) => {
        res.json(exercises);
    });
});

router.put('/', (req, res) => {
    repository.create(req.body, (err, ex) => {
        if (err) return console.error(err);
        res.sendStatus(200);
    });
});

module.exports = router;
