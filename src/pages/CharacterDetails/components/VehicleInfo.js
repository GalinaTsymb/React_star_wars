import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';
import useVehicles from "../../../hooks/useVehicles";
import * as defaultAddr from "../../../utils";
const defaultImageUrl = defaultAddr.getDefaultImage();

export default function VehicleInfo({ id }) {
    const onImageLoadError = useCallback((e) => {
        if (e.target.src !== defaultImageUrl) {
            e.target.src = defaultImageUrl;
        }
    }, []);
    const info = useVehicles(id);
    return info ? (
        <div>
            <div>
                <img
                    src={defaultAddr.getVehicleImageUrl(id)}
                    alt={info.name}
                    className="img-thumbnail"
                    onError={onImageLoadError}
                />
            </div>
            <Link to={`/vehicles/${id}/`}>{info.name}</Link>
        </div>
    ) : (
        <p>Loading...</p>
    );
}