const mongo_model = require('../model/mongo_schedules.js')

const Schedule_model = mongo_model.schedule_modle;
const Schedule_status_model = mongo_model.schedule_status_modle;

const create_schedule = async (req, res) => {

    var data = {
        schedule_group: req.body.schedule_group,
        schedule_time: req.body.schedule_time,
        mail_details: {
            mail_to: req.body.mail_to,
            subject: req.body.subject,
            body_text: req.body.body_text
        }
    }

    const create_schedule = new Schedule_model(data);

    create_schedule.save().then((data) => {
        console.log('Created data Successfully');
        res.status(201);
        res.json({
            Status: 'Success',
            Msg: 'Data Created Successfully',
            Data: data
        });
    }).catch((err) => {
        console.log('not able to create schedule', err);
        res.json({
            Status: 'Failure',
            Msg: 'Error Occured While Creating',
            Error: err
        })
    })

}

const read_schedule = async (req, res) => {

    const schedule_group = req.params.schedule_group;

    Schedule_model.find({ schedule_group: schedule_group }, function (err, docs) {
        if (err) {
            console.log('not able to Read schedule', err);

            res.json({
                Status: 'Failure',
                Msg: 'Error Occured While Reading',
                Error: err
            })
        }
        res.status(200);
        res.json({
            Status: 'Success',
            Data: docs
        });

    });

}

const list_schedule = async (req, res) => {

    Schedule_model.find({}, function (err, docs) {
        if (err) {
            console.log('not able to list schedules', err);

            res.json({
                Status: 'Failure',
                Msg: 'Error Occured While Listing',
                Error: err
            })
        }
        res.status(200);
        res.json({
            Status: 'Success',
            Data: docs
        });

    });

}

const update_schedule = async (req, res) => {
    try {
        const schedules = await Schedule_model.findOneAndUpdate(req.body.schedule_group, req.body, { new: true })

        if (!schedules) {
            console.log('Data Not Updated');

            res.json({
                Status: 'Failure',
                Msg: 'Data Not Updated'
            })
        }
        res.status(200);
        res.json({
            Status: 'Success',
            Data: schedules
        });

    } catch (e) {
        res.json({
            Status: 'Failure',
            Msg: 'Data Not Updated',
            Error: e
        })
    }


}


const delete_schedule = async (req, res) => {

    try {
        const schedules = await Schedule_model.deleteOne({schedule_group:req.params.schedule_group})


        if (!schedules) {
            console.log('Data Not Deleted');

            res.json({
                Status: 'Failure',
                Msg: 'Data Not Deleted'
            })
        }

        res.status(200);
        res.json({
            Status: 'Success',
            Data: schedules
        });
    } catch (e) {
        res.json({
            Status: 'Failure',
            Msg: 'Data Not Deleted',
            Error: e
        })
    }

}


const get_all_schedule = async () => {

   return  new Promise ((resolve,reject) => {
        Schedule_model.find({}, function (err, docs) {
            if (err) {
             reject([])
            }
            resolve(docs)
        });
    });

}

const get_mail_status = async (req, res) => {

    const schedule_status = req.params.get_mail_status;

    Schedule_status_model.find({ status: schedule_status }, function (err, docs) {
        if (err) {
            console.log('not able to get schedule status', err);

            res.json({
                Status: 'Failure',
                Msg: 'Error Occured While getting schedule status',
                Error: err
            })
        }
        res.status(200);
        res.json({
            Status: 'Success',
            Data: docs
        });

    });

}


module.exports = {
    create_schedule,
    read_schedule,
    list_schedule,
    update_schedule,
    delete_schedule,
    get_all_schedule,
    get_mail_status
};
