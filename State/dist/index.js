import { Controller } from "./Controller.js";
import { Selecting } from "./State/State.js";
let controller = new Controller(new Selecting());
controller.next();
controller.next();
// controller.cancel()
controller.next();
controller.next();
controller.cancel();
controller.next();
//# sourceMappingURL=index.js.map