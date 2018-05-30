const mongoose = require("mongoose")

// the password for atlas cluster, not necessary for connecting to local db
const password = process.env.DB_PASS
console.log(password)

// obtain the uri for your mongodb cluster by chosing the connect option from the atlas dashboard
process.env.MONGODB_URI = `mongodb://jamesjsewell:${password}@cluster0-shard-00-00-cants.mongodb.net:27017,cluster0-shard-00-01-cants.mongodb.net:27017,cluster0-shard-00-02-cants.mongodb.net:27017/htown_skate?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`

// establishes a connection to the mongodb atlas cluster, can also connect to local db
module.exports = {

    connectToDB: function(projectName) {
        
        // connects to a mongodb
        mongoose.connect(process.env.MONGODB_URI, (err, db) => {
            if (err) {
                console.log(err)
            } else {
                console.log(
                    "\n\n===== Connected to: " + 'mongodb' + "=====\n\n"
                )
            }
        })
    }
}