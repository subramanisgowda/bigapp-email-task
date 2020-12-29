const express = require('express');

const handle_schedule = require('../controller/handle_schedules.js')

const router = new express.Router();

router.get('/',(req,res) => {
    res.status(200);
    res.json("Hello Welcome to Email Scheduling engine");
})

router.post('/create_schedule',handle_schedule.create_schedule);

router.get('/read_schedule/:schedule_group',handle_schedule.read_schedule);
router.get('/list_schedule',handle_schedule.list_schedule);
router.patch('/update_schedule',handle_schedule.update_schedule);
router.delete('/delete_schedule/:schedule_group',handle_schedule.delete_schedule);
router.get('/delete_schedule/:get_mail_status',handle_schedule.get_mail_status);



module.exports = router;
