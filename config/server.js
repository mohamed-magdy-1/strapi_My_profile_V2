module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  cors: {
    // origin: ['https://swordmanhwa.site/', 'https://www.swordmanhwa.site/'],
    // Uncomment the above line and comment the next line to restrict CORS to specific domains
    // For development, you can allow all origins
    enabled: true,
     origin: ['*'], // أثناء التطوير، استبدلها لاحقًا بموقعك للإنتاج
    headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  },
});
