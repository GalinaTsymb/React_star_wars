import { useEffect, useState } from 'react';
import apiService from '../services/starships';

const useStarships = id => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const info = await apiService.getSStarships(id).then(res => res.json());
                setInfo(info);
            } catch {}
        })();
    }, [id]);

    return info;
};

export default useStarships;