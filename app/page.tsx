export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          Kabuto Lab
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Immersive experience design
        </p>
        <a 
          href="/products"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
        >
          View Products
        </a>
      </div>
    </div>
  )
}