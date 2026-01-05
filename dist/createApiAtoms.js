import { atom } from "jotai";
export function createApiAtoms(fetcher) {
    const dataAtom = atom(null);
    const statusAtom = atom("idle");
    const errorAtom = atom(null);
    const fetchAtom = atom(null, async (_get, set) => {
        try {
            set(statusAtom, "loading");
            set(errorAtom, null);
            const data = await fetcher();
            set(dataAtom, data);
            set(statusAtom, "success");
        }
        catch (err) {
            set(errorAtom, err);
            set(statusAtom, "error");
        }
    });
    return {
        dataAtom,
        statusAtom,
        errorAtom,
        fetchAtom,
    };
}
