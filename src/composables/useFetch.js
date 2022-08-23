import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    axios.get(url, true)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(error);
        })

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch;