const apiHost = process.env.REACT_APP_SW_API_HOST;

class SpeciesApiService {

    getSpecies = async id => fetch(`${apiHost}/species/${id}`);


}
export default new SpeciesApiService();