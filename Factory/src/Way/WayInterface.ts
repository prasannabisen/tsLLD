interface WayInterface{
    send():string;
}

class Road implements WayInterface{
    send():string{
        return "send via road";
    }
}

class Air implements WayInterface{
    send():string{
        return "send via air";
    }
} 

export {Air, Road}
export type {WayInterface}