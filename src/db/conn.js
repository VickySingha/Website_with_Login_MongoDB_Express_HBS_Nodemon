const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ytReg",{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(()=>{
    console.log(`Connection successful`);
}).catch((e)=>{
    console.log(`No Connection`);
})