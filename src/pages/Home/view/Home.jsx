import Pagination from "../../../components/Pagination"
import { allGamesController } from "../controller/allGamesController"
import { availableGamesController } from "../controller/availableGamesController"
import GridView from "../../../components/ListItem/GridView"
import { useState } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import ListView from "../../../components/ListItem/ListView"

const Home = () => {

    const [mode, setMode] = useState("all")
    const [searchInput, setSearchInput] = useState("")

    const changeMode = (input) => {
        setMode(input)
        // searchInput("")
    }

    const listAllGames = allGamesController(searchInput)
    const listAvailableGames = availableGamesController(searchInput)

    return (
        <div>
            <button className="border p-2 mr-20" onClick={() => changeMode("available")}>Available Games</button>
            <button className="border p-2" onClick={() => changeMode("all")}>All Games</button>
            <div className="mx-auto py-4 pb-10 sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1200px]">
                <div className="mb-4 flex gap-x-4 items-center">
                    <input className="border rounded-lg px-2 py-1 bg-transparent" type="search" onChange={(e) => setSearchInput(e.target.value)} />
                    <p>{listAllGames.isLoading ? "Loading..." : ""}</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-16 gap-y-4 mx-auto">
                    {(mode === "all" ? (listAllGames.results) : listAvailableGames)?.map(game => (
                        <GridView item={game} key={game.slug} />
                    ))}
                </div>

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