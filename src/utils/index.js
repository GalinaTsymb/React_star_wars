
export const getDefaultImage = () => `${process.env.REACT_APP_DEFAULT_IMG_URL}`;

// get planet id
export const getPlanetId = url => /planets\/(\d+)/i.exec(url)?.[1];

//get people id
export const getPeopleId = url => /people\/(\d+)/i.exec(url)?.[1];

//get films id
export const getFilmsId = url => /films\/(\d+)/i.exec(url)?.[1];

//get species id
export const getSpeciesId = url => /species\/(\d+)/i.exec(url)?.[1];

//get vehicle id
export const getVehicleId = url => /vehicles\/(\d+)/i.exec(url)?.[1];

//get starships id
export const getstarshipsId = url => /starships\/(\d+)/i.exec(url)?.[1];

//picture is generated for a specific address
export const getPlanetImageUrl = id =>
    `${process.env.REACT_APP_SW_VISUAL_API_HOST}/assets/img/planets/${id}.jpg`;

//picture is generated for a specific address
export const getCharacterImageUrl = id =>
    `${process.env.REACT_APP_SW_VISUAL_API_HOST}/assets/img/characters/${id}.jpg`;

export const getFilmsImageUrl = id =>
    `${process.env.REACT_APP_SW_VISUAL_API_HOST}/assets/img/films/${id}.jpg`;

export const getSpeciesImageUrl = id =>
    `${process.env.REACT_APP_SW_VISUAL_API_HOST}/assets/img/species/${id}.jpg`;

export const getVehicleImageUrl = id =>
    `${process.env.REACT_APP_SW_VISUAL_API_HOST}/assets/img/vehicles/${id}.jpg`;