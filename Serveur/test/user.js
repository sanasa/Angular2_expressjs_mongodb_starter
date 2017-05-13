var chaiHttp = require('chai-http');
var chai = require('chai');
var mocha = require('mocha');

var should = chai.should();

var app = require('../src/lib/app');
var User = require('../src/models/user');
var mongoose = require("mongoose");

chai.use(chaiHttp);
 
describe('Users', function () {

    // // cleanup the collection once to have consistent test results
    // before(function (done) {
    //     User.remove({}, function (err, result) {
    //         done(err);
    //     });
    // });

    describe('/GET User', () => {
        it('it should GET all the Users', (done) => {
            chai.request(app)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
  
    describe('POST User', function () {

        it('should create a User', function (done) {
            var User = {
                'name': 'Susie',
                'age': 13
            };

            chai.request(app)
                .post('/users')
                .send(User)
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
        


    });
});

