const cronJob = require('node-cron');
var env = require('./src/config/readenv.js');
const get_schedules = require('./src/controller/handle_schedules.js');


const send_mail = require('./src/controller/send_mail.js');


get_schedules.get_all_schedule().then((res) => {

    for (var i = 0; i < res.length; i++) {

        var cron_time = res[i].schedule_time;
        var msg = `Scheduled ${res[i].schedule_group} Mails`;

        createJobs(cron_time, msg, res[i].mail_details,res[i].schedule_group)
    }

    function createJobs(cron_time, msg, mail_details,schedule_group) {

        cronJob.schedule(cron_time, () => {
            console.log(msg);
            send_mail(mail_details,schedule_group);
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        });

    }

}).catch((err) => {
    console.log(err);
})