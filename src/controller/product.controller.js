import { sendResponse } from "../common/response.handler.js";
import { responseCode } from "../helper/constant.js";
import { ProductService } from "../service/product.service.js";

const productService = new ProductService();

export class ProductController {
  async add(req, res) {
    try {
      sendResponse(
        res,
        responseCode.CREATED,
        await productService.addProduct(req)
      );
    } catch (err) {
      console.error(err);
      sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
    }
  }

  async findAll(req, res) {
    try {
      sendResponse(
        res,
        responseCode.OK,
        await productService.findAllProduct(req)
      );
    } catch (err) {
      console.error(err);
      sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
    }
  }
}
