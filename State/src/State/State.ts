import type { Controller } from "../Controller.js";

interface State {
  next(controller: Controller): void;
  cancel(controller: Controller): void;
}

class Selecting implements State {
  next(controller: Controller) {
    console.log("Customer is selecting Product");
    controller.setController(new Placing());
  }
  cancel(controller: Controller) {
    controller.setController(new OrderCancel());
  }
}

class Placing implements State {
  next(controller: Controller) {
    console.log("Customer is placing order");
    controller.setController(new Processing());
  }
  cancel(controller: Controller) {
    controller.setController(new OrderCancel());
  }
}

class Processing implements State {
  next(controller: Controller) {
    console.log("Processing the cart");
    controller.setController(new OutForDelivery());
  }
  cancel(controller: Controller) {
    controller.setController(new OrderCancel());
  }
}

class OutForDelivery implements State {
  next(controller: Controller) {
    console.log("Out for Delivery");
    controller.setController(new Delivered());
  }
  cancel() {
    console.log("Sorry but cant cancel now");
  }
}

class OrderCancel implements State {
  next() {
    console.log("Order is canceled");
  }
  cancel() {
    console.log("Order is canceled");
  }
}

class Delivered implements State {
  next() {
    console.log("Ordered Delivered");
  }
  cancel() {
    console.log("Sorry but cant cancel now");
  }
}

export { Selecting };
export type { State };
