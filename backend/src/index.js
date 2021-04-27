const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();
//
app.set('port', process.env.PORT || 8000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/querys', require('./routes/q1'));
app.use('/querys', require('./routes/q2'));
app.use('/querys', require('./routes/q3'));
app.use('/querys', require('./routes/q4'));
app.use('/querys', require('./routes/q5'));
app.use('/querys', require('./routes/q6'));
app.use('/querys', require('./routes/q7'));
app.use('/querys', require('./routes/q8'));
app.use('/querys', require('./routes/q9'));
app.use('/querys', require('./routes/q10'));
app.use('/querys', require('./routes/q11'));
app.use('/querys', require('./routes/q12'));
app.use('/querys', require('./routes/q13'));
app.use('/querys', require('./routes/q14'));
app.use('/querys', require('./routes/q15'));
app.use('/querys', require('./routes/q17'));
app.use('/querys', require('./routes/q18'));
app.use('/querys', require('./routes/q20'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  });

app.listen(app.get('port'), () => {
    console.log('Server running on port: ', app.get('port'));
});
