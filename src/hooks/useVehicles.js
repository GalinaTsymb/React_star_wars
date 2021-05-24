import { useEffect, useState } from 'react';
import apiService from '../services/vehicles';

const useVehicles = id => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const info = await apiService.getVehicles(id).then(res => res.json());
                setInfo(info);
            } catch {}
        })();
    }, [id]);

    return info;
};

export default useVehicles;