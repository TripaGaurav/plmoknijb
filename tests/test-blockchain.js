
const chai = require('chai');
const chaiHttp = require('chai-http');
const { mineBlock, getBlockByNumber, getChainStats } = require('../blockchain.js'); // Adjust the path as needed

chai.use(chaiHttp);
const expect = chai.expect; // Use expect instead of should

describe('Blockchain APIs', () => {
  // Test the /block POST API
  describe('/POST block', () => {
    it('it should mine a new block', (done) => {
      chai.request('http://localhost:3000')
        .post('/block')
        .send({ data: '123' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('blockNo');
          expect(res.body).to.have.property('hash');
          expect(res.body).to.have.property('nounce');
          expect(res.body).to.have.property('prevhash');
          done();
        });
    });
  });

  // Test the /block GET API
  describe('/GET block', () => {
    it('it should get an existing block', (done) => {
      chai.request('http://localhost:3000')
        .get('/block')
        .query({ blockNo: '15' }) // Adjust block number as needed
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('hash');
          expect(res.body).to.have.property('data');
          expect(res.body).to.have.property('nounce');
          expect(res.body).to.have.property('prevhash');
          expect(res.body).to.have.property('blockNo');
          done();
        });
    });
  });

  // Test the /block/stats GET API
  describe('/GET block/stats', () => {
    it('it should get chain statistics', (done) => {
      chai.request('http://localhost:3000')
        .get('/block/stats')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('blockCount');
          expect(res.body).to.have.property('latestBlockHash');
          done();
        });
    });
  });
});
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const { mineBlock, getBlockByNumber, getChainStats } = require('../blockchain.js'); // Adjust the path as needed

// chai.use(chaiHttp);
// const should = chai.should(); 

// describe('Blockchain APIs', () => {
//   // Test the /block POST API
//   describe('/POST block', () => {
//     it('it should mine a new block', (done) => {
//       chai.request('http://localhost:3000')
//         .post('/block')
//         .send({ data: '123' })
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('blockNo');
//           res.body.should.have.property('blockHash');
//           res.body.should.have.property('nounce');
//           res.body.should.have.property('previousHash');
//           done();
//         });
//     });
//   });

//   // Test the /block GET API
//   describe('/GET block', () => {
//     it('it should get an existing block', (done) => {
//       chai.request('http://localhost:3000')
//         .get('/block')
//         .query({ blockNo: '2' }) // Adjust block number as needed
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('blockHash');
//           res.body.should.have.property('data');
//           res.body.should.have.property('nounce');
//           res.body.should.have.property('previousHash');
//           res.body.should.have.property('blockNo');
//           done();
//         });
//     });
//   });

//   // Test the /block/stats GET API
//   describe('/GET block/stats', () => {
//     it('it should get chain statistics', (done) => {
//       chai.request('http://localhost:3000')
//         .get('/block/stats')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('blockCount');
//           res.body.should.have.property('latestBlockHash');
//           done();
//         });
//     });
//   });
// });
