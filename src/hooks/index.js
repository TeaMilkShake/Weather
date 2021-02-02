import {useLocation} from 'react-router-dom'

export const useQuery = (query) =>{
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    
    return queryParams.get(query).toLowerCase()
}