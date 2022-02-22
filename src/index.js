const express = require('express');

const app = express();


app.set('port',process.env.PORT || 3010);
app.use(express.json);
const routes = require('./routes/indexRoutes');
app.use(routes);


app.listen(app.get('post'), () => {
    console.log("this server is running on port "+ app.get('port'))
})