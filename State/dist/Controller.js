class Controller {
    state;
    constructor(state) {
        this.state = state;
    }
    setController(state) {
        this.state = state;
    }
    next() {
        this.state.next(this);
    }
    cancel() {
        this.state.cancel(this);
    }
}
export { Controller };
//# sourceMappingURL=Controller.js.map