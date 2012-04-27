

var title = 'Bids for Kids - in Node.js!!! -- Procurements';

var procurements = {
       100: {
                id: 100,
                description: 'Night on the town plus hotel for 2.',
                donation: 'Night on the town!',
                estimatedValue: '$800.00',
                donor: 'Anita Schumacher',
                procurer: 'Anita',
                notes: 'Expires Sept 20th, 2012'
            },
       101: {
                id: 101,
                description: 'A family pack of snow shoes for 4!',
                donation: 'Snow shoes',
                estimatedValue: '$200.00',
                donor: 'Sheri Fantz-Gut',
                procurer: 'Anita',
                notes: ''
            }
    };

exports.procurements = procurements;

exports.index = function(req, res){
  res.render('procurements/index', { 
      title: title,
      procurements: procurements
  });    
};

exports.view = function(req, res){
  res.render('procurements/view', {
      title: title,
      procurement: procurements[req.params.id]
  });
};

exports.edit = function(req, res){
  res.render('procurements/edit', {
      title: title,
      procurement: procurements[req.params.id]
  });
};

exports.saveEdit = function(req, res){
  var proc = procurements[req.params.id];
  proc.description = req.body.description;
  proc.donation = req.body.donation;
  proc.estimatedValue = req.body.estimatedValue;
  proc.donor = req.body.donor;
  proc.procurer = req.body.procurer;
  proc.notes = req.body.notes;

  res.render('procurements/saved', {
      title: 'Procurement saved: New Donation ' + req.body.donation + '; Old Donation ' + proc.donation
  });
};
    //description: 'Night on the town plus hotel for 2.',
    //donation: 'Night on the town!',
    //estimatedValue: '$800.00',
    //donor: 'Anita Schumacher',
    //procurer: 'Anita',
    //notes: 'Expires Sept 20th, 2012'
