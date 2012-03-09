var procurement = require('../procurements');

beforeEach(function() {
    res = function() {};
    res.render = function(view, options){};
    spyOn(res, 'render');
});

describe('procurements-index',function(){
    
    beforeEach(function() {
        procurement.index(null, res);
    });
    
    it('should have the correct title', function() {
        expect(res.render.mostRecentCall.args[1].title).toEqual('Bids for Kids - in Node.js!!! -- Procurements');
    });
    
    it('should render the procurements index page', function() {
        expect(res.render.mostRecentCall.args[0]).toEqual('procurements/index');
    });
});

describe('procurements-edit', function(){
    beforeEach(function() {
        req = {
            params : {
                id : 100
            }
        };

        procurement.edit(req, res);
    });

    it('should render the procurement edit page', function() {
        expect(res.render.mostRecentCall.args[0]).toEqual('procurements/edit');
    });

    it('should have a model', function() {
        expect(res.render.mostRecentCall.args[1].procurement).toBeDefined();
    });

    it('should have the correct model id', function() {
        expect(res.render.mostRecentCall.args[1].procurement.id).toEqual(100);
    });
});

describe('procurement-saveEdit', function(){
    var newDescription = 'this is just a test';

    beforeEach(function(){
        req = {
            params : {
                id : 100,
                description: newDescription
            }
        };

        procurement.saveEdit(req, res);
    });

    it('should update the description of the correct procurement', function(){
        expect(procurement.procurements[100].description).toEqual(newDescription);
    });
    
    it('should render the procurement saved page', function() {
        expect(res.render.mostRecentCall.args[0]).toEqual('procurements/saved');
    });
});
