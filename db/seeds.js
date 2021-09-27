const mongoose = require('mongoose');

try {
    db.characters.bulkWrite(
        [
            { insertOne :
        {
            "document":
            {
                "_id": 4, 
                "char": "Erik",
                "username": "Erik-jpg",
                "password": "Th1s1sapassw0rd", 
                "date": "new Date", 
                "time": "scheduledTime", 
                "links": "https://YouTube.com"
            }
        }
    },
    {
         insertOne :
            {
                "document":
                {
                    "_id": 3, 
                    "char": "Laura", 
                    "username": "Laura-sister",
                    "password": "Th1s1sapassw04d2",
                    "date": "new Date", 
                    "time": "scheduledTime", 
                    "links": "https://allrecipes.com"
                }
            }
    },
    {
        insertOne :
            {
                "document":
                {
                    "_id": 2, 
                    "char": "Terrie",
                    "username": "Terrie-mother",
                    "password": "1mad3y0u&1canendy0u", 
                    "date": "new Date", 
                    "time": "scheduledTime", 
                    "links": "https://www.wnps.org"
                }
            }
    }
        ]
    );
}
catch (error) {
    print (error);
}

// make a model file 

// store dates in ISODate() function, native to mongo and can convert javascript UTC into ISO. returning to user side will take a conversion