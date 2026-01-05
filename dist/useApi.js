import { useAtom } from "jotai";
import { useEffect, useMemo } from "react";
import { createApiAtoms } from "./createApiAtoms";
export function useApi(fetcher, options) {
    var _a;
    const atoms = useMemo(() => createApiAtoms(fetcher), [fetcher]);
    const [data] = useAtom(atoms.dataAtom);
    const [status] = useAtom(atoms.statusAtom);
    const [error] = useAtom(atoms.errorAtom);
    const [, fetch] = useAtom(atoms.fetchAtom);
    const enabled = (_a = options === null || options === void 0 ? void 0 : options.enabled) !== null && _a !== void 0 ? _a : true;
    useEffect(() => {
        if (enabled) {
            fetch();
        }
    }, [enabled, fetch]);
    return {
        data,
        loading: status === "loading",
        success: status === "success",
        error,
        refetch: fetch,
    };
}
