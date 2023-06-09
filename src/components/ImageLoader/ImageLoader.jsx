import { useState } from "react"

const ImageLoader = ({ src }) => {
    const [isLoading, setIsLoading] = useState(true)

    const handleImageLoad = () => {
        setIsLoading(false)
    }

    return (
        <>
            {isLoading && <p>Loading.....</p>} {/* Placeholder atau spinner loading */}
            <img src={src} onLoad={handleImageLoad} style={{ display: isLoading ? "none" : "block" }} className="h-full object-cover" />
        </>
    )
}

export default ImageLoader