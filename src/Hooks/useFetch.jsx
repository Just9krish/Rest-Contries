import { useState, useEffect } from "react"

const UseFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchCoutries = async () => {
            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`This is HTTP error: The status is ${response.status}`)
                }
                const actualData = await response.json()
                setData(actualData)
                setError(null)

            } catch (error) {
                setError(error.message)
                setData(null)

            } finally {
                setIsLoading(false)
            }
        }

        fetchCoutries()
    }, [url]);

    return { data, error, isLoading}
}

export default UseFetch;
