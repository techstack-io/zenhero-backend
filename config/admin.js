module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'mK+Vq3n0SUnsWqzsUeIuQA=='),
  },
});
