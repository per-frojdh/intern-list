import Router from 'koa-router';

import SteamService from './steamService.mjs';

const serviceContract = {
  GetByName: 'GetByName',
  GetById: 'GetById',

};

const router = new Router({
  prefix: '/steam',
});

router.get(serviceContract.GetById, '/id/:id', async (ctx, next) => {
  const json = await SteamService.getById(ctx.params.id);
  ctx.body = json;
});

router.get(serviceContract.GetByName, '/name/:name', async (ctx, next) => {
});

export default { router };
