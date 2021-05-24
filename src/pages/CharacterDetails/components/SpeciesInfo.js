import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';
import useSpecies from "../../../hooks/useSpecies";
import * as defaultAddr from "../../../utils";
const defaultImageUrl = defaultAddr.getDefaultImage();

export default function SpeciesInfo({ id }) {
    const onImageLoadError = useCallback((e) => {
        if (e.target.src !== defaultImageUrl) {
            e.target.src = defaultImageUrl;
        }
    }, []);
    const info = useSpecies(id);
    return info ? (
        <div>
            <div>
                <img
                    src={defaultAddr.getSpeciesImageUrl(id)}
                    alt={info.name}
                    className="img-thumbnail"
                    onError={onImageLoadError}
                />
            </div>
            <Link to={`/species/${id}/`}>{info.name}</Link>
        </div>
    ) : (
        <p>Loading...</p>
    );
}