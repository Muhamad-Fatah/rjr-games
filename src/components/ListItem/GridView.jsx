import ImageLoader from "../ImageLoader/ImageLoader"

const GridView = ({ item }) => {

    const { id, name, background_image } = item

    return (
        <div key={id} id={id} className="w-[200px] bg-[#202020] rounded-lg overflow-hidden border">
            <div className="h-[140px] flex justify-center items-center">
                <img src={background_image} className="h-full object-cover" />
            </div>
            {/* h-[120px] */}
            <div className="px-4 py-2">
                <p className="font-bold truncate">{name}</p>
            </div>
        </div>
    )
}

export default GridView