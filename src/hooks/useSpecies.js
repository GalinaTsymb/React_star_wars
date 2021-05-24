import { useEffect, useState } from 'react';
import apiService from '../services/species';

const useSpecies = id => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const info = await apiService.getSpecies(id).then(res => res.json());
                setInfo(info);
            } catch {}
        })();
    }, [id]);

    return info;
};

export default useSpecies;