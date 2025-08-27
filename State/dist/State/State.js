class Selecting {
    next(controller) {
        console.log("Customer is selecting Product");
        controller.setController(new Placing());
    }
    cancel(controller) {
        controller.setController(new OrderCancel());
    }
}
class Placing {
    next(controller) {
        console.log("Customer is placing order");
        controller.setController(new Processing());
    }
    cancel(controller) {
        controller.setController(new OrderCancel());
    }
}
class Processing {
    next(controller) {
        console.log("Processing the cart");
        controller.setController(new OutForDelivery());
    }
    cancel(controller) {
        controller.setController(new OrderCancel());
    }
}
class OutForDelivery {
    next(controller) {
        console.log("Out for Delivery");
        controller.setController(new Delivered());
    }
    cancel() {
        console.log("Sorry but cant cancel now");
    }
}
class OrderCancel {
    next() {
        console.log("Order is canceled");
    }
    cancel() {
        console.log("Order is canceled");
    }
}
class Delivered {
    next() {
        console.log("Ordered Delivered");
    }
    cancel() {
        console.log("Sorry but cant cancel now");
    }
}
export { Selecting };
//# sourceMappingURL=State.js.map