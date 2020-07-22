var express = require('express');
var router = express.Router();

/* hard-coded js object -- array of dogs */
const dogs = [
  {id: "dog", url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8"},
  {id: "doggo", url: "https://images.unsplash.com/photo-1517423568366-8b83523034fd"},
  {id: "pup", url: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05"},
  {id: "pupper", url: "https://images.unsplash.com/photo-1505628346881-b72b27e84530"},
  {id: "goodboi", url: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2"},
  {id: "bestboi", url: "https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1"},
  {id: "dogsrule", url: "https://images.unsplash.com/photo-1552053831-71594a27632d"},
  {id: "catsdrool", url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"}
]

/* INDEX ROUTE - home page */
router.get('/', (req, res, next) => {
  res.redirect('/dog');
});

/* random dog page */
router.get('/dog', (req, res, next) => {
  let randomDog;
  randomDog = dogs[Math.floor(Math.random() * dogs.length)];
  console.log(randomDog);
  res.render('index', {randomDog: randomDog});
});

/* show list of dogs */
router.get('/dogs', (req, res, next) => {
  res.render('dogs', {dogs: dogs});
});

/* NEW - show form to add new dog */
router.get('/new', (req, res, next) => {
  res.render('new');
});

/* NEW - add new dog */
router.post('/dogs', (req, res, next) => {
  // get data from form and add to dogs array
  const name = req.body.name;
  const img = req.body.img;
  const newDog = {id: name, url: img};
  dogs.push(newDog);

  res.redirect('/dogs');
})

/* DELETE route */



module.exports = router;
