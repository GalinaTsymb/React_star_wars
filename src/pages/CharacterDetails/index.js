import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Loader from '../../components/Loader';
import ServerError from '../../components/ServerError';
import CharactersApiService from '../../services/characters.js';

import * as defaultAddress from '../../utils';

import CharacterInfoRow from "../Characters/components/CharacterInfoRow";


import styled from 'styled-components';
import FilmsInfo from "./components/FilmsInfo";
import SpeciesInfo from "./components/SpeciesInfo";
import VehicleInfo from "./components/VehicleInfo";
import StarshipsInfo from "./components/StarshipsInfo";
import CharactersInfo from "../CharacterDetails/components/CharacterInfo";


const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  align-items: flex-start;
  
  > div {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    width: 24%;
    border-radius: 10px;
    padding: 10px 10px 30px;
    
    > h3 {
    text-align: center;
    width: 100%;
    }    
    > div a{
    color: #039BE5;
    text-align: center;
    }    
    > div {
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       width: 100%;
       margin: 0 auto;
       div {
       display: flex;
       flex-direction: column;
       width: 40%;
       align-items: center;
       margin-bottom: 10px;
       }
    }
    >div img {
    height: 80px;
    max-width: 80px;
    border-radius: 50%;
    width: 80px;
    }    
  }
`;

const CharacterDetails = () => {
    const { id } = useParams();
    const [characterInfo, setCharacterInfo] = useState(null);
    const [fetchStatus, setFetchStatus] = useState({
        fetching: false,
        error: false,
    });

    const { fetching, error } = fetchStatus;

    useEffect(() => {
        (async () => {
            setFetchStatus({
                fetching: true,
                error: false,
            });
            try {
                const info = await CharactersApiService
                    .getCharacter(id)
                    .then(res => res.json());

                setCharacterInfo(info);
                setFetchStatus({
                    fetching: false,
                    error: false,
                });
            } catch {
                setFetchStatus({
                    fetching: false,
                    error: true,
                });
            }
        })();
    }, [id]);

    if (fetching) return <Loader />;
    if (error) return <ServerError />;
    if (!characterInfo) return '';

    return (
        <div>
            <CharactersInfo id={id} character={characterInfo}/>
            <InfoWrapper>
                <InfoWrapper>
                    <h3>Related Films</h3>
                    <div>
                        {characterInfo.films.length > 0?characterInfo.films.map(url => (
                            <FilmsInfo key={url} id={defaultAddress.getFilmsId(url)} />
                        )) : <p>There are no related items for this category</p>}
                    </div>
                </InfoWrapper>
                <InfoWrapper>
                    <h3>Related Species</h3>
                    <div>
                        {characterInfo.species.length > 0?characterInfo.species.map(url => (
                            <SpeciesInfo key={url} id={defaultAddress.getSpeciesId(url)} />
                        )) : <p>There are no related items for this category</p>}
                    </div>
                </InfoWrapper>
                <InfoWrapper>
                    <h3>Related Vehicles</h3>
                    <div>
                        {characterInfo.vehicles.length > 0?characterInfo.vehicles.map(url => (
                            <VehicleInfo key={url} id={defaultAddress.getVehicleId(url)} />
                        )):<p>There are no related items for this category</p>}
                    </div>
                </InfoWrapper>
                <InfoWrapper>
                    <h3>Related Starships</h3>
                    <div>
                        {characterInfo.starships.length > 0?characterInfo.starships.map(url => (
                            <StarshipsInfo key={url} id={defaultAddress.getstarshipsId(url)} />
                        )): <p>There are no related items for this category</p>}
                    </div>
                </InfoWrapper>
            </InfoWrapper>
            <dl className='dl-horizontal '>
                <CharacterInfoRow name='Created:'    value={characterInfo.created} />
                <CharacterInfoRow name='Edited:'     value={characterInfo.edited} />
            </dl>
        </div>
    );
};

export default CharacterDetails;
