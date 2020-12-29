# BigApp-Email-Scheduling App
Simple API to schedule emails and send them, API's we can use to add new schedules, Update exixting schedule, delete and also we can use to list all scedules 

# Configuration needed
 1. Need to install node modules
 2. Add **.env** file with neccesory details
    a. PORT
    b. SMTP_HOST
    c. SMTP_USER
    d. SMTP_PASSWORD

# Start Application to
To start application use **npm run start** command and to schedule use **npm run mail_cron** command

# Project Repository Structure
![alt text](/screenshots/Repository.png "Repository Details")

# Screenshots

## Deliverd Email 
![alt text](/screenshots/Delivered_Mail.png "Description goes here")

**Create Schedule API Response**
![alt text](/screenshots/Create_Schedule_Api.png "Create Schedule API Response Executed in postman")

**Created Schedule In Database**
![alt text](/screenshots/Schedule_Details_DB.png "Created Schedule in DataBase")

## Different API Response

**Read Schedules**
![alt text](/screenshots/Read_Schedule.png "Response Executed in postman")

**list Schedules**
![alt text](/screenshots/List_Schedule.png "Response Executed in postman")

**Update Schedules**
![alt text](/screenshots/Update_Schedule.png "Response Executed in postman")

**Delete Schedules**
![alt text](/screenshots/Delete_schedule.png "Response Executed in postman")

**API to list all failed or success Mails**
![alt text](/screenshots/Get_Sent_Status.png "Response Executed in postman")

**List of all Mail Sent status either failed or success**
![alt text](/screenshots/Sent_Status_DB.png "Response Executed in postman")
