export type ApiStatus = "idle" | "loading" | "success" | "error";
export declare function createApiAtoms<T>(fetcher: () => Promise<T>): {
    dataAtom: import("jotai").PrimitiveAtom<T | null> & {
        init: T | null;
    };
    statusAtom: import("jotai").PrimitiveAtom<ApiStatus> & {
        init: ApiStatus;
    };
    errorAtom: import("jotai").PrimitiveAtom<unknown> & {
        init: unknown;
    };
    fetchAtom: import("jotai").WritableAtom<null, [], Promise<void>> & {
        init: null;
    };
};
