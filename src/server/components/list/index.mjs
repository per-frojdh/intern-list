import listController from './listController.mjs';
import listRoutes from '../../util/debug/list-routes.mjs';

listRoutes(listController.router);

export default listController;
