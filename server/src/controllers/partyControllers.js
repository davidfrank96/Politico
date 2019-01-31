import party from "../models/party";

class partyController {
  // Get all parties
  static getAllParties(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: party
    });
  }

  // Get a single party
  static getSingleParty(req, res) {
    const findParty = party.find(
      partyobj => partyobj.id === parseInt(req.params.id, 10)
    );

    if (findParty) {
      return res.status(200).json({
        status: res.statusCode,
        data: findParty
      });
    }
  }
}

export default partyController;
