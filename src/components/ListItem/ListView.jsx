const ListView = ({ item }) => {

    const { id, name, background_image } = item

    return (
        <div key={id} id={id} className="border p-4 flex gap-x-4">
            <div className="w-[200px] h-[180px] flex justify-center">
                <img src={background_image} className="h-full object-cover" />
            </div>
            <p className="font-bold mb-2">{name}</p>
        </div>
    )
}

export default ListView