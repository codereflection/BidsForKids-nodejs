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
            },
            body : {
                description: newDescription,
                donation: 'new donation',
                estimatedValue: '$100.50',
                donor: 'someone else',
                procurer: 'Anita',
                notes: 'these are my notes. there are many like them but these notes are mine.'
            }
        };

        procurement.saveEdit(req, res);
    });

    it('should update the description', function(){
        expect(procurement.procurements[100].description).toEqual(newDescription);
    });
    
    it('should update the donation', function(){
        expect(procurement.procurements[100].donation).toEqual('new donation');
    });

    it('should update the estimated value', function(){
        expect(procurement.procurements[100].estimatedValue).toEqual('$100.50');
    });

    it('should update the donor', function(){
        expect(procurement.procurements[100].donor).toEqual('someone else');
    });

    it('should update the notes', function(){
        expect(procurement.procurements[100].notes).toEqual('these are my notes. there are many like them but these notes are mine.');
    });

    it('should update the procurer', function(){
        expect(procurement.procurements[100].procurer).toEqual('Anita');
    });

    it('should render the procurement saved page', function() {
        expect(res.render.mostRecentCall.args[0]).toEqual('procurements/saved');
    });
});
