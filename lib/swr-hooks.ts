import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useCreateRegistro() {
  const { data, error } = useSWR(`/api/create-registro`, fetcher)

  return {
    categorias: data,
    isLoading: !error && !data,
    isError: error,
  }
}