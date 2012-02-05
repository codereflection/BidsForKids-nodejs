

var title = 'Bids for Kids - in Node.js!!! -- Procurements';

var procurements = {
       100: {
                id: 100,
                description: 'Night on the town plus hotel for 2.',
                donation: 'Night on the town!',
                estimatedValue: 100,
                donor: 'Anita Schumacher',
                procurer: 'Anita',
                notes: 'Expires Sept 20th, 2012'
            },
    };

exports.index = function(req, res){
  res.render('index', { title: title });    
};

exports.view = function(req, res){
  res.render('procurements/view', {
      title: title,
      procurement: req.procurements.id
  });
};
