import { sendResponse } from "../common/response.handler.js";
import { responseCode } from "../helper/constant.js";
import { UserService } from "../service/user.service.js";

const userService = new UserService();

export class UserController {
  async add(req, res) {
    try {
      sendResponse(res, responseCode.CREATED, await userService.addUser(req));
    } catch (err) {
      console.error(err);
      sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
    }
  }
}
