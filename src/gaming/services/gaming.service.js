import axios from "axios";

axios.defaults.headers.get['header-name'] = 'value'

class GamingService {
    constructor() {
        this.API_URL = "https://free-to-play-games-database.p.rapidapi.com/api/games"
        this.axiosInstance = axios.create({
            baseURL: this.API_URL,
            headers: {
                'X-RapidAPI-Key': 'b7b1165414msh8e97fee96b5fcf7p1a21a5jsnfe2a883521ca',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
    }

    async getMovies() {
        try {
            const response = await this.axiosInstance.get()
            const { data } = response

            console.log(data)
            return data
        } catch (err) {
            console.error(err)
        }
    }
}

export default GamingService
