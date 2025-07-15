'use strict';

module.exports = {
  register({ strapi }) {
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
