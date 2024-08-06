const express = require('express');

import { createRole }  from '../../controller/matrix/mtx_role/create'

// const { openFeatureValidation } = require('../../middleware/openFeatureValidation');

const matrixRoutes = express.Router();

matrixRoutes.post('/createRole', /*openFeatureValidation('mtx-role-create') ,*/ createRole);
// matrixRoutes.get('/readRole', /* openFeatureValidation('mtx-role-read') ,*/ readRole);
// matrixRoutes.put('/updateRole', /* openFeatureValidation('mtx-role-update') ,*/ updateRole);
// matrixRoutes.delete('/deleteRole', /* openFeatureValidation('mtx-role-delete') ,*/ deleteRole);

export default matrixRoutes;