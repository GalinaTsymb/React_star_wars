const apiHost = process.env.REACT_APP_SW_API_HOST;

class StarshipsApiService {

    getSStarships = async id => fetch(`${apiHost}/starships/${id}`);


}
export default new StarshipsApiService();