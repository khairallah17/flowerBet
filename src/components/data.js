import axios from "axios";

const fetchOdds = async () => {
        const response = await axios(`https://api.the-odds-api.com/v4/sports/upcoming/odds`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "regions": "us",
            "martkets": "h2h",
            "apiKey": import.meta.env.VITE_API_KEY,
        },
    })

    const dt = await response.data
    return dt
}

export default fetchOdds