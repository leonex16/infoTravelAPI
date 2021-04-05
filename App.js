let express = require('express');
let morgan = require('morgan');
let cors = require('cors');

let app = express();
let port = process.env.PORT ?? 3001;

app
	.set('views', `${__dirname}/views`)
	.set('view engine', 'ejs')
	.engine('jsx', require('express-react-views').createEngine())
	.set('port', port)
	.use(morgan('dev'))
	.use('/src', express.static(`${__dirname}/public`))
	.use(express.static(`${__dirname}/lib`))
	.use(express.static(`${__dirname}/helpers`))
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.use(cors())
	.use(require('./routes/urls')) // ES ASÍ
	// .use('/', require('./routes/urls')) // ESTABA ASÍ
	.use(require('./routes/API'));

module.exports = app;
