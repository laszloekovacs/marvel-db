import useSWR from "swr"

export const fetcher = (...args) => fetch(..args).then(res => res.json())


export function useMarvelApi() {
    const {data, error, isLoading} = useSWR('/api/${somethign}', fetcher)
}