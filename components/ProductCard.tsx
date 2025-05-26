import Image from "next/image"
import Link from "next/link"

type ProductCardProps = {
  id: string
  title: string
  handle: string
  imageSrc: string
  imageAlt: string
  price: string
  currencyCode: string
  variantId: string
  addToCart: (productId: string, quantity: number, variantId: string) => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  handle,
  imageSrc,
  imageAlt,
  price,
  currencyCode,
  variantId,
  addToCart,
}) => {
  return (
    <div
      key={id}
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={120}
        height={120}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <h2 className="text-lg font-bold mt-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-500 text-base mt-1 font-medium">{`${price} ${currencyCode}`}</p>

      <div className="flex flex-col gap-3 mt-6 w-full">
        <button
          onClick={() => addToCart(id, 1, variantId)}
          className="w-full relative overflow-hidden rounded-lg px-5 py-2.5 font-semibold text-white bg-gradient-to-r 
          from-indigo-500 to-purple-600 shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
        >
          <span className="relative z-10">🛒 Add to Cart</span>
          <span className="absolute inset-0 bg-white opacity-10 blur-sm"></span>
        </button>

        <Link
          href={`/product/${handle}`}
          className="w-full relative overflow-hidden rounded-lg px-5 py-2.5 font-semibold text-indigo-600 border
           border-indigo-600 shadow-sm hover:text-indigo-600 hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
        >
          🔍 View Details
        </Link>
      </div>

      {/* Optional tag */}
      <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
      New Arrival
    </div>
    </div>
  )
}

export default ProductCard
