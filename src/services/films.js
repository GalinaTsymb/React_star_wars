const apiHost = process.env.REACT_APP_SW_API_HOST;

class FilmsApiService {

    getFilms = async id => fetch(`${apiHost}/films/${id}`);

}
export default new FilmsApiService();