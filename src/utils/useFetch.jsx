import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [controller, setController] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name == 'AbortError') {
          console.log('Request Cancelled')
        } else {
          setError(err)
        }
      })
      .finally(() => setLoading(false))
    return () => abortController.abort()
  }, [url])

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort()
      setError('Request Cancelled')
    }
  }

  return { data, loading, error, handleCancelRequest }
}

export default useFetch
