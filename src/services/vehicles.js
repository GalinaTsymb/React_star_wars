const apiHost = process.env.REACT_APP_SW_API_HOST;

class VehiclesApiService {

    getVehicles = async id => fetch(`${apiHost}/vehicles/${id}`);

}
export default new VehiclesApiService();