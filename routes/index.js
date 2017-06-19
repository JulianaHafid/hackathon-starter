import express from 'express';
const router = express.Router();


/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

/* GET login page */
router.get('/login', (req, res, next) => {
  res.render('login', {
    title: 'Login'
  });
});

/* GET login page */
router.get('/signup', (req, res, next) => {
  res.render('signup', {
    title: 'Signup'
  });
});


export default router;
