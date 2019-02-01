import Office from "../models/office";

class OfficeController {
  // Get all offices
  static getAllOffices(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: Office
    });
  }

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
}
export default OfficeController;
