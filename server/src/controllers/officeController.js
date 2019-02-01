import Office from "../models/office";

class OfficeController {
  // Get all offices
  static getAllOffices(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: Office
    });
  }

  //GetSigngleOffice
  static getSingleOffice(req, res) {
    const findOffice = Office.find(
      officeobj => officeobj.id === parseInt(req.params.id, 10)
    );

    if (findOffice) {
      return res.status(200).json({
        status: res.statusCode,
        data: findOffice
      });
    }
    return res.status(404).json({
      message: "Not Found"
    });
  }

  //Create office
  static createNewOffice(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        status: res.statusCode,
        message: "office name is required"
      });
    }
    const newOffice = {
      id: req.body.id,
      name: req.body.name,
      type: req.body.type
    };
    Office.push(newOffice);
    return res.status(201).json({
      status: res.statusCode,
      data: [
        {
          id: newOffice.id,
          name: newOffice.name,
          type: newOffice.type
        }
      ]
    });
  }
}
export default OfficeController;
