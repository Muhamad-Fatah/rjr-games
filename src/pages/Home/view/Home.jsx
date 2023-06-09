import { allGamesController } from "../controller/allGamesController"
import { availableGamesController } from "../controller/availableGamesController"
import GridView from "../../../components/ListItem/GridView"
import { useEffect, useState } from "react"
import BasicPagination from "../../../components/Pagination/BasicPagination"
import { usePagination } from "../../../components/Pagination/usePagination"

const Home = () => {

    const [mode, setMode] = useState("available")
    const [searchInput, setSearchInput] = useState("")
    const [pageIndex, setPageIndex] = useState(1)

    const changeMode = (input) => {
        setMode(input)
        // searchInput("")
    }

    const listAllGames = allGamesController(searchInput, pageIndex)
    const listAvailableGames = availableGamesController(searchInput)

    // Pagination for list all games
    const pagination = usePagination(Math.ceil(listAllGames.count / 40))
    const { currentPage } = pagination

    useEffect(() => {
        setPageIndex(currentPage)
    }, [currentPage])

    return (
        <div>
            <div className="mx-auto py-4 pb-10 sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1200px]">
                <div className="mb-4">
                    <button className="border p-2 mr-20" onClick={() => changeMode("available")}>Available Games</button>
                    <button className="border p-2" onClick={() => changeMode("all")}>All Games</button>
                </div>
                <div className="mb-4 flex gap-x-4 items-center">
                    <input className="border rounded-lg px-2 py-1 bg-transparent" type="search" onChange={(e) => setSearchInput(e.target.value)} />
                    <p>{listAllGames.isLoading ? "Loading..." : ""}</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-16 gap-y-4 mx-auto mb-4">
                    {(mode === "all" ? (listAllGames.results) : listAvailableGames)?.map(game => (
                        <GridView item={game} key={game.slug} />
                    ))}
                </div>

                {mode === "all" ? <BasicPagination
                    paginationProps={pagination}
                /> : null}

                {/* <Pagination
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                    count={count}
                    listData={myGames.sort((a, b) => (a.name - b.name))}
                    mode={mode}
                    render={(items) => (
                        <div className="grid grid-cols-6 gap-x-16 gap-y-4 mx-auto">
                            {(mode === "MyGames" ? items[pageIndex - 1] : listGames)?.map(game => {
                                const { id, name, background_image } = game
                                return (
                                    <div key={id} id={id} className="w-[350px] bg-[#202020] w-fit w-[200px] rounded-lg overflow-hidden">
                                        <div className="h-[120px]">
                                            <img src={background_image} alt="image.jpg" width={200} height={200} />
                                        </div>
                                        <p className="font-bold p-2 truncate">{name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                /> */}
            </div>
        </div>
    )
}

export default Home