const BasicPagination = ({ paginationProps }) => {

    const { currentPage, pagination, goToPrevPage, goToNextPage, goToPage } = paginationProps

    // const [numPagination, setNumPagination] = useState([])
    // const [statusPage, setStatusPage] = useState({ currentPage: 100, totalPages: Math.ceil(totalGames/40) })

    // const { currentPage, totalPages } = statusPage

    // useEffect(() => {
    //     setNumPagination(generatePagination(currentPage, totalPages))
    // }, [statusPage.currentPage])

    return (
        <div className="flex gap-x-4 mx-auto border w-fit">
            <button
                onClick={goToPrevPage}
                className="hover:bg-blue-900 p-2"
            >
                Prev
            </button>
            {pagination?.map((num, idx) => (
                <button
                    key={num !== "..." ? num : `${num}-${idx}`}
                    onClick={() => goToPage(num)}
                    className={`${currentPage === num ? "text-blue-500" : ""} hover:bg-blue-900 p-2`}
                >
                    {num}
                </button>
            ))}
            <button
                onClick={goToNextPage}
                className="hover:bg-blue-900 p-2"
            >
                Next
            </button>
        </div>
    )
}

export default BasicPagination