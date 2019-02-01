import Office from "../models/office";

class OfficeController {
  // Get all offices
  static getAllOffices(req, res) {
    return res.status(200).json({
      status: res.statusCode,
      data: Office
    });
  }
}
export default OfficeController;
