import { atom } from "jotai";

export type ApiStatus = "idle" | "loading" | "success" | "error";

export function createApiAtoms<T>(fetcher: () => Promise<T>) {
  const dataAtom = atom<T | null>(null);
  const statusAtom = atom<ApiStatus>("idle");
  const errorAtom = atom<unknown>(null);

  const fetchAtom = atom(null, async (_get, set) => {
    try {
      set(statusAtom, "loading");
      set(errorAtom, null);

      const data = await fetcher();

      set(dataAtom, data);
      set(statusAtom, "success");
    } catch (err) {
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
