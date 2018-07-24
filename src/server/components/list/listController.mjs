import Router from 'koa-router';

import SteamService from '../steam/steamService.mjs';
import ListService from './listService.mjs';

const serviceContract = {
  AddToList: 'AddToList',
};

const router = new Router({
  prefix: '/list',
});

router.post(serviceContract.AddToList, '/:id', async (ctx, next) => {
  try {
    const json = await SteamService.getById(ctx.params.id);
    const listService = new ListService();
    console.log(json);
    const result = await listService.addToList(json);
    ctx.body = result;
  } catch (e) {
    ctx.body = e;
  }
});


export default { router };
