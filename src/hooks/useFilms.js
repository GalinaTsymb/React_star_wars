import { useEffect, useState } from 'react';

import apiService from '../services/films';

const useFilms = id => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const info = await apiService.getFilms(id).then(res => res.json());
                setInfo(info);
            } catch {}
        })();
    }, [id]);

    return info;
};

export default useFilms;