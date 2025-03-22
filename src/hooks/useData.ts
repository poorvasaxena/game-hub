import { useEffect, useState } from "react";
import apiClient from "../Services/api-services";
import { CanceledError } from "axios";

interface FetchResponse<T>{
   count: number;
    results:T[];
}

const useData = <T>(endPoint : string) =>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isloading,setLoading] = useState(false)
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
      apiClient
        .get<FetchResponse<T>>(endPoint,{signal: controller.signal})
        .then((res) => {
          setLoading(false)
          setData(res.data.results)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
          setLoading(false)});
       return () => controller.abort();
    }, []);
    

    return { data, error,isloading};
}

export default useData;