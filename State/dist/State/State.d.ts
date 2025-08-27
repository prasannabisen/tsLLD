import type { Controller } from "../Controller.js";
interface State {
    next(controller: Controller): void;
    cancel(controller: Controller): void;
}
declare class Selecting implements State {
    next(controller: Controller): void;
    cancel(controller: Controller): void;
}
export { Selecting };
export type { State };
//# sourceMappingURL=State.d.ts.map