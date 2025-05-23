import ProductList from "@/components/ProductList"
import React from "react"

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center h-20 mt-10">Products</h1>
      <ProductList />
    </div>
  )
}

export default Products
