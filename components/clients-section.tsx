import Image from "next/image"

const clients = [
  {
    name: "Karachi Bakery",
    logo: "/clients/karachi-bakery-logo.png",
  },
  {
    name: "Creamstone",
    logo: "/clients/creamstone-logo.png",
  },
  {
    name: "Airtel",
    logo: "/clients/airtel-logo.png",
  },
  {
    name: "Kalamandir",
    logo: "/clients/kalamandir-logo.png",
  },
  {
    name: "Ben Franklin",
    logo: "/clients/ben-franklin-logo.png",
  },
  {
    name: "BigC Mobiles",
    logo: "/clients/bigc-mobiles-logo.png",
  },
]

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">Trusted by Leading Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with India's most recognized businesses to deliver premium packaging solutions
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 md:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
