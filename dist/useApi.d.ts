export declare function useApi<T>(fetcher: () => Promise<T>, options?: {
    enabled?: boolean;
}): {
    data: Awaited<T> | null;
    loading: boolean;
    success: boolean;
    error: unknown;
    refetch: () => Promise<void>;
};
