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
      className="border border-gray-400 hover:shadow p-6 flex flex-col items-center"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={100}
        height={100}
        className="rounded-md"
        priority
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600">{`${price} ${currencyCode}`}</p>
      <div className="flex flex-col gap-2 mt-4">
        <button
          onClick={() => addToCart(id, 1, variantId)}
          className="px-4 py-2 border hover:border-gray-500"
        >
          🛒 Add to Cart
        </button>
        <Link
          href={`/product/${handle}`}
          className="px-4 py-2 mb-8 border hover:border-gray-500"
        >
          🔍 View Details
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
