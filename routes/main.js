const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID});
const router = vertex.router();

router.get('/', (req, res) => {
  const data = {
    greeting: 'Hello, Welcome to my portfolio site!!',
    introduction: 'I am a full stack web developer based in Atlanta'
  }
  res.render('landing', data);
});

module.exports = router;