var procurement = require('../procurements');

describe('procurements-index',function(){
    
    beforeEach(function() {
        res = function() {};
        res.render = function(view, options){};
        spyOn(res, 'render');

        procurement.index(null, res);
    });
    
    it('should have the correct title', function() {
        expect(res.render.mostRecentCall.args[1].title).toEqual('Bids for Kids - in Node.js!!! -- Procurements');
    });
    
    it('should render the procurements index page', function() {
        expect(res.render.mostRecentCall.args[0]).toEqual('procurements/index');
    });
});