import { useEffect, useState } from "react"

export const allGamesController = (searchInput, pageIndex) => {

    const [listAllGames, setListAllGames] = useState({
        isLoading: true
    })

    // &page=${pageIndex}        

    const getListGames = () => {
        setListAllGames(prevState => ({ ...prevState, isLoading: true }))
        fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_VERCEL_KEY}&search=${searchInput}&page_size=40&metacritic=50,100&ordering=name&search_exact&page=${pageIndex}`)
            .then(res => res.json())
            .then(data => {
                setListAllGames({ isLoading: false, ...data })
            })
            .catch(err => console.log("Error to get data"))
            .finally(() => setListAllGames(prevState => ({ ...prevState, isLoading: false })))
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            getListGames()
        }, [300])

        return () => clearTimeout(delay)

    }, [searchInput])
    useEffect(() => {
        getListGames()
    }, [pageIndex])

    return listAllGames
}