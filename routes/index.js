
/*
 * GET home page.
 */

var title = 'Bids for Kids - in Node.js!';

exports.index = function(req, res){
  res.render('index', { title: title })
};
