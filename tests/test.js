import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../server/src/app";

chai.use(chaiHttp);

describe("getAllParty", () => {
  it("get all parties", () => {
    chai
      .request(app)
      .get("/")
      .end((error, res) => {
        expect(res.text).to.equal("hello world");
      });
  });
});

describe('POST Party', () => {
  it('it should not POST a Political 

Party without a name', (done) => { chai.request(app) .post

      ('/api/v1/parties').send({ logoUrl: 'www.image.com/img.jpg', })

      .end((err, res) => {
        res.should.have.status(400);

        res.body.should.be.a('object'); res.body.should.have.property

          ('message').eql('Party name is required'); done();
      });
});