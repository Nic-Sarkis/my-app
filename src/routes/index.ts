const express = require('express');
import matrixRoutes from './matrix/index';

const indexRoute = express.Router();
indexRoute.use('/matrix', matrixRoutes);

export default indexRoute;