'use strict';

module.exports = {
  register({ strapi }) {
    // إصلاح مشكلة secure cookie خلف reverse proxy
    strapi.server.use(async (ctx, next) => {
      if (ctx.req?.socket) {
        ctx.req.socket.encrypted = true;
      }
      await next();
    });

    // الـ route الموجود مسبقاً
    strapi.server.routes([
      {
        method: 'GET',
        path: '/health',
        handler: async (ctx) => {
          const users = await strapi.entityService.findMany('plugin::users-permissions.user', {
            limit: 1,
          });
          ctx.body = { status: 'ok', userCount: users.length };
        },
        config: {
          auth: false,
        },
      },
    ]);
  },

  bootstrap(/*{ strapi }*/) {},
};