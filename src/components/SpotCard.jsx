const SpotCard = ({ image, title, onClick }) => {
  return (
    <div

        className="relative block overflow-hidden rounded-lg w-full relative cursor-pointer"
        onClick={onClick}
        >
        <img
            className="rounded-lg w-full h-[180px] object-cover"
            src={image}
            alt={title}
        />
        <div className="absolute inset-0 bg-black transition-all duration-300 ease-linear bg-opacity-50 hover:bg-opacity-10 rounded-lg flex items-center justify-center">
            <p className="text-white text-2xl font-bold">{title}</p>
        </div>
     </div>
  )
}

export default SpotCard
