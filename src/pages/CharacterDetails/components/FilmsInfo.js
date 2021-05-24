import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';
import useFilms from "../../../hooks/useFilms";
import * as defaultAddr from "../../../utils";

const defaultImageUrl = defaultAddr.getDefaultImage();

export default function FilmsInfo({ id }) {
    const onImageLoadError = useCallback((e) => {
        if (e.target.src !== defaultImageUrl) {
            e.target.src = defaultImageUrl;
        }
    }, []);
    const info = useFilms(id);
    return info ? (
        <div>
            <div>
                <img
                    src={defaultAddr.getFilmsImageUrl(id)}
                    alt={info.title}
                    className="img-thumbnail"
                    onError={onImageLoadError}
                />
            </div>
            <Link to={`/films/${id}/`}>{info.title}</Link>
        </div>
    ) : (
        <p>Loading...</p>
    );
}