import type State = require("./State/State");

class Controller {
  private state: State.State;
  constructor(state: State.State) {
    this.state = state;
  }
  setController(state: State.State): void {
    this.state = state;
  }

  next(): void {
    this.state.next(this);
  }
  cancel():void{
    this.state.cancel(this);
  }
}

export { Controller };
