const mongoose = require('mongoose');

const connection_url = 'mongodb://localhost:27017/schedule_email'


mongoose.connect(connection_url,{ useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log('Connected to database sucesssfully');
}).catch((err)=>{
   console.log('Error : Unable to connect to database ',err);
});