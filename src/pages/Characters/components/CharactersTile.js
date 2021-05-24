import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CharacterInfoRow from "./CharacterInfoRow";

const CharacterInfoWrapper = styled.div`
  dt {
    width: 94px;
  }
  dd {
    margin-left: 111px;
  }
`;

export default function CharacterTile({ item, onImageLoadError }) {
    return (
        <div className='thumbnail character-image'>
            <img src={item.imgSrc} alt={item.name} onError={onImageLoadError} />
            <div className='caption'>
                <h2>
                    <Link to={`/character/${item.id}`}>{item.name}</Link>
                </h2>
                <CharacterInfoWrapper>
                    <dl className='dl-horizontal'>
                        <CharacterInfoRow name='height'     value={item.height} />
                        <CharacterInfoRow name='mass'       value={`${item.mass} kg`} />
                        <CharacterInfoRow name='hair_color' value={item.hair_color} />
                        <CharacterInfoRow name='skin_color' value={item.skin_color} />
                        <CharacterInfoRow name='eye_color'  value={item.eye_color} />
                        <CharacterInfoRow name='birth_year' value={item.birth_year}/>
                        <CharacterInfoRow name='gender'     value={item.gender}/>
                    </dl>
                </CharacterInfoWrapper>
            </div>
        </div>
    );
}
