exports.createPostValidator = (req, res, next) => {
  //title
  req.check('title', 'Write a title').notEmpty();
  req.check('title', 'Title must be between 2-150 characters').isLength({
    min: 2,
    max:150
  });

//body
req.check('body', 'Write a body').notEmpty();
req.check('body', 'Body must be between 2-2000 characters').isLength({
  min: 2,
  max:2000
});
//check for errors

};