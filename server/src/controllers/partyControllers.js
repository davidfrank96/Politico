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

  // Create new party

  static createNewParty(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        status: res.statusCode,
        message: "Party name is required"
      });
    }
    const newParty = {
      id: party.length + 1,
      name: req.body.name,
      logoUrl: req.body.logoUrl
    };
    party.push(newParty);
    return res.status(201).json({
      status: res.statusCode,
      data: [
        {
          id: newParty.id,
          name: newParty.name
        }
      ]
    });
  }
}

export default partyController;
