import { useState, useEffect } from 'react'
import axios from 'axios'
import { RAPID_API_KEY } from '@env';


const rapidApiKey = RAPID_API_KEY;
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'ac41adeb06msh018d54334284620p1599cbjsnf21c257e4597',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
                (options)

            setData(response.data.data);
            setIsLoading(false)
        }
        catch (error) {
            setError(error)
            alert("Something went wrong")
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData();

    }, []);

    const refetch = () => {
        setIsLoading(true)
        fetchData();

    }
    return { data, isLoading, error, refetch };
}

export default useFetch;