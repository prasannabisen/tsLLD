import type { WayInterface } from "./Way/WayInterface.js";
import { Air, Road } from "./Way/WayInterface.js";
export default class Factory{
    selectWay(medium:string):WayInterface{
        if(medium.match('air')){
            return new Air();
        }
        return new Road();
    }
}