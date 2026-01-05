import { useAtom } from "jotai";
import { useEffect, useMemo } from "react";
import { createApiAtoms } from "./createApiAtoms";

export function useApi<T>(
  fetcher: () => Promise<T>,
  options?: { enabled?: boolean }
) {
  const atoms = useMemo(() => createApiAtoms(fetcher), [fetcher]);

  const [data] = useAtom(atoms.dataAtom);
  const [status] = useAtom(atoms.statusAtom);
  const [error] = useAtom(atoms.errorAtom);
  const [, fetch] = useAtom(atoms.fetchAtom);

  const enabled = options?.enabled ?? true;

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
