import { useEffect, useState } from "react"
import { myGames } from "../constant/availableGames"

export const availableGamesController = (searchInput) => {
    const [listAvailableGames, setListAvailableGames] = useState([])

    const getAvailableGames = () => {
        const fetchPromises = myGames.map(async (search) => {
            const res = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_APP_KEY}&search=${search}&metacritic=50,100&search_exact=true`);
            const data = await res.json();
            if (data.count > 0) {
                return data.results[0];
            } else {
                return null;
            }
        });

        Promise.all(fetchPromises)
            .then((results) => {
                const filterAndSortResults = results.filter((game) => game !== null).sort((a, b) => a.name.localeCompare(b.name))
                const availableGames = [...new Set(filterAndSortResults.map(game => JSON.stringify(game)))].map(game => JSON.parse(game))
                localStorage.setItem("availableGames", JSON.stringify(availableGames));
            })
            .catch((error) => {
                // Tangani kesalahan jika terjadi
                console.error(error);
            });
    };

    useEffect(() => {
        if (searchInput) {
            const searchAvailableGames = listAvailableGames.filter(game => game.name.toLowerCase().includes(searchInput.toLowerCase()))
            setListAvailableGames(searchAvailableGames)
        } else {
            const gamesFromLocal = JSON.parse(localStorage.getItem("availableGames"))
            if (gamesFromLocal) {
                setListAvailableGames(gamesFromLocal)
            } else {
                getAvailableGames()
            }
        }
    }, [searchInput])

    return listAvailableGames
}
