import { Air, Road } from "./Way/WayInterface.js";
export default class Factory {
    selectWay(medium) {
        if (medium.match('air')) {
            return new Air();
        }
        return new Road();
    }
}
//# sourceMappingURL=Factory.js.map