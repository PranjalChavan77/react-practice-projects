import { useEffect, useState } from "react";

export default function useQuotes() {

    const [ quote, setQuote ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    async function fetchQuote() {
        setLoading(true);
        setError(null);
    
        try {
            const res = await fetch("https://dummyjson.com/quotes/random");

            if (!res.ok) {
                throw new Error("Failed to fetch Quote");
            }

            const data = await res.json();
            
            setQuote({
                text: data.quote,
                author: data.author,
            });

        } catch (err) {
            setError(err.message || "Something went wrong");

        } finally {
            setLoading(false);
          }
        }

    useEffect(() => {
        fetchQuote();
    },[]);

    const getNewQuote = () => fetchQuote();

    return {
        quote,
        loading,
        error,
        getNewQuote,
    }
}
