const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 8000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/querys', require('./routes/q1'));

app.listen(app.get('port'), () => {
    console.log('Server running on port: ', app.get('port'));
});
