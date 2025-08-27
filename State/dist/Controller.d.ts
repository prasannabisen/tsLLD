import type State = require("./State/State");
declare class Controller {
    private state;
    constructor(state: State.State);
    setController(state: State.State): void;
    next(): void;
    cancel(): void;
}
export { Controller };
//# sourceMappingURL=Controller.d.ts.map