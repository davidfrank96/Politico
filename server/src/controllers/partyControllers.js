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
    return res.status(404).json({
      message: 'Not Found',
    })
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
      id: req.body.id,
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

  // Edit Party name

  static updatePartyName(req, res) {
    const findParty = party.find(
      party => party.id === parseInt(req.params.id, 10)
    );
    if (findParty) {
      delete findParty.name;
      findParty.name = req.body.name;

      return res.status(200).json({
        status: res.statusCode,
        data: [
          {
            id: findParty.id,
            name: findParty.name
          }
        ]
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      message: "Party id not found"
    });
  }

  //Delete party

  static deleteParty(req, res) {
    const findParty = party.find(
      partyobt => partyobt.id === parseInt(req.params.id, 10)
    );
    if (!findParty) res.status(404).send("The record does not exist");

    const index = party.indexOf(findParty);
    party.splice(index, 1);

    res.status(200).json({
      status: res.statusCode,
      data: [
        {
          id: findParty.id,
          message: "Party has been deleted"
        }
      ]
    });
  }
}

export default partyController;
