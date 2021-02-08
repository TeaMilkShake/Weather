import {useLocation} from 'react-router-dom'

export const useQuery = (query) =>{
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    if(queryParams.get(query)){
        return queryParams.get(query)
    }else{
        return null
    }
}