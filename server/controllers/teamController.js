const Team = require('../models/Team');
const User = require('../models/User');

exports.createTeam = async (req, res) => {
  const { name, description } = req.body;

  try {
    let team = await Team.findOne({ name });
    if (team) {
      return res.status(400).json({ message: 'Team name already exists' });
    }

    team = new Team({
      name,
      description,
      members: [req.user.id], // Assuming req.user is set after auth middleware
    });

    await team.save();
    res.status(201).json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('members', 'username email');
    res.json(teams);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('members', 'username email');
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.json(team);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.status(500).send('Server error');
  }
};

exports.joinTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    if (team.members.includes(req.user.id)) {
      return res.status(400).json({ message: 'User already a member of the team' });
    }

    team.members.push(req.user.id);
    await team.save();
    res.json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
