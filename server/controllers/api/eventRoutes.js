const router = require('express').Router();
const { Events} = require('../../models');
const withAuth = require('../../utils/auth');

// route to get all events
router.get('/', withAuth, async (req, res) => {
    const eventsData = await Events.findAll().catch((err) => { 
        res.json(err);
      });
        const events = eventsData.map((events) => events.get({ plain: true }));
        res.render('all', { events });
      });

// route to join an Event
router.post('/', withAuth, async (req, res) => {
    try {
      const newEvents = await Events.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newEvents);
    } catch (err) {
      res.status(400).json(err);
    }
  });