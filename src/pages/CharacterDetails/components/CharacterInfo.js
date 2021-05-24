import React, { useCallback } from "react";
import styled from "styled-components";
import CharacterInfoRow from "../../Characters/components/CharacterInfoRow";
import HomeWorldInfo from "./HomeWorldInfo";
import * as defaultAddr from '../../../utils';

const defaultImageUrl = defaultAddr.getDefaultImage();

const InfoWRapper = styled.div`
  display: flex;
  padding: 20px;
  font-size: 16px;
  background-color: #2e3338;
  border-radius: 10px;
  flex-direction: row;
  column-gap: 30px;
  height: 300px;
  img {
    max-height: 100%;
  }
`;
export default function CharacterInfo({ id, character }) {
    const onImageLoadError = useCallback((e) => {
        if (e.target.src !== defaultImageUrl) {
            e.target.src = defaultImageUrl;
        }
    }, []);

    return (
        <InfoWRapper>
            <div>
                <img
                    src={defaultAddr.getCharacterImageUrl(id)}
                    alt={character.name}
                    className="img-thumbnail"
                    onError={onImageLoadError}
                />
            </div>
            <div>
                <h2>{character.name}</h2>
                <dl className='dl-horizontal'>
                    <CharacterInfoRow name='Height:'      value={character.height} />
                    <CharacterInfoRow name='Mass:'        value={`${character.mass} kg`} />
                    <CharacterInfoRow name='Hair_color:'  value={character.hair_color} />
                    <CharacterInfoRow name='Skin_color:'  value={character.skin_color} />
                    <CharacterInfoRow name='Eye_color:'   value={character.eye_color} />
                    <CharacterInfoRow name='Birth_year:'  value={character.birth_year} />
                    <CharacterInfoRow name='Gender:'      value={character.gender} />
                    <CharacterInfoRow name='Homeworld:'   value={<HomeWorldInfo key={character.homeworld} id={defaultAddr.getPlanetId(character.homeworld)} />} />

                </dl>
            </div>
        </InfoWRapper>
    );
}
