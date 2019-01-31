import party from "../models/party";

class partyController {
  // Get all parties
  static getAllParties(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: party
    });
  }

  //Get a single student
  //static getSingleParty(req, res) {
  //    nconst findParty = party.find(party=>)
  //}
}

export default partyController;
