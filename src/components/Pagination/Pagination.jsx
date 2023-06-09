import { useEffect, useState } from "react"
import Button from "./Button"

const Pagination = ({ pageIndex, setPageIndex, count, listData, render, mode }) => {

    const [pageItem, setPageItem] = useState([])

    const prevPage = () => {
        setPageIndex(prev => prev - 1)
    }

    const nextPage = () => {
        setPageIndex(prev => prev + 1)
    }

    const gotoPage = (index) => {
        setPageIndex(index)
    }

    const listDataIntoPagination = () => {
        const chunkedArray = []
        for (let i = 0; i < listData.length; i += 40) {
            const chunk = listData.slice(i, i + 40)
            chunkedArray.push(chunk)
        }
        setPageItem(chunkedArray)
    }

    useEffect(() => {
        listDataIntoPagination()
    }, [listData])

    return (
        <>
            {render(pageItem, pageIndex)}
            <div className="flex items-center gap-x-10 mx-auto w-fit mt-10">
                <div>
                    <Button onClick={() => gotoPage(1)} disabled={pageIndex === 1}>{"<<"} First</Button>
                    <Button onClick={prevPage} disabled={pageIndex === 1}>{"<"} Prev</Button>
                </div>
                <p>{pageIndex}</p>
                <div>
                    <Button
                        onClick={nextPage} disabled={pageIndex === Math.ceil(count / 40)}>Next {">"}</Button>
                    <Button
                        onClick={() => gotoPage(Math.ceil(count / 40))}
                        disabled={mode === "myGames" ? pageIndex === pageItem.length : pageIndex === Math.ceil(count / 40)}
                    >Last {">>"}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Pagination