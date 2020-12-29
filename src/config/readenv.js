
var dotenv = require('dotenv')

const result = dotenv.config()
 
if (result.error) {
    console.log(result.error) ;   
  
}
