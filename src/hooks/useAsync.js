import axios from 'axios';
import { useEffect, useState } from 'react';

const useAsync = (getUrl) => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get(getUrl).then(res => setState(res.data));
    }, [getUrl])
    return state;
};

export default useAsync;