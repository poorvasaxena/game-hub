import { useEffect, useState } from "react";
import apiClient from "../Services/api-services";
import { CanceledError } from "axios";


interface Genre{
    id:number;
    name:string;
}

interface FetchGenresResponse{
   count: number;
    results:Genre[];
}
const useGenres = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string>("");
    const [isloading,setLoading] = useState(false)
  
    useEffect(() => {

        const controller = new AbortController();
        setLoading(true)
      apiClient
        .get<FetchGenresResponse>("/genres")
        .then((res) => {
          setLoading(false)
          setGenres(res.data.results)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
          setLoading(false)});
       return () => controller.abort();
    }, []);
    

    return { genres, error,isloading};
}

export default useGenres;