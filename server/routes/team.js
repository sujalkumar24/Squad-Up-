const express = require('express');
const router = express.Router();
const { createTeam, getTeams, getTeamById, joinTeam } = require('../controllers/teamController');

// Create a new team
router.post('/', createTeam);

// Get all teams
router.get('/', getTeams);

// Get team by ID
router.get('/:id', getTeamById);

// Join a team
router.post('/:id/join', joinTeam);

module.exports = router;
