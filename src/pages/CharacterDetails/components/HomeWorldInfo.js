import React from 'react';
import { Link } from 'react-router-dom';
import usePlanet from "../../../hooks/usePlanet";

export default function HomeWorldInfo({ id }) {
    const info = usePlanet(id);

    return info ? (
        <Link to={`/planet/${id}/`}>{info.name}</Link>
    ) : (
        <p>Loading...</p>
    );
}