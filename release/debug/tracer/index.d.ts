export interface TracerTarget {
    [key: string]: Function;
}
export declare const wrapTarget: (target: TracerTarget) => {
    unwrap: () => void;
};
