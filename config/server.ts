export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  keys: env.array('APP_KEYS', [
    '5cb3483c38d55a94ad09a5a13094167854f9e35e1dbb1656b1b9932b9e019fb5', 
    '8fe3a07a2679c94a2b74502b7b6b6f5c60ad83e0b1f7e7b50b0c835c0debbd69'
  ]),
    app: {
    keys: env.array('APP_KEYS'),
  },
});
