interface WayInterface {
    send(): string;
}
declare class Road implements WayInterface {
    send(): string;
}
declare class Air implements WayInterface {
    send(): string;
}
export { Air, Road };
export type { WayInterface };
//# sourceMappingURL=WayInterface.d.ts.map