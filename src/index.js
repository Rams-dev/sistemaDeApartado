const express = require('express');

const app = express();


app.set('port',process.env.PORT || 3010);
app.use(express.json() );
app.use(express.urlencoded({ extended: true }))
require('./database')
const router = require('./routes/indexRoutes');

app.use("/api",router);

app.listen(app.get('port'), () => {
    console.log("this server is running on port "+ app.get('port'))
})