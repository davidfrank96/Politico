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

