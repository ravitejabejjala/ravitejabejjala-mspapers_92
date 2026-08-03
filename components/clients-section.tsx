import Image from "next/image"

const clients = [
  { name: "Karachi Bakery", logo: "/clients/karachi-bakery-logo.png" },
  { name: "Creamstone", logo: "/clients/creamstone-logo.png" },
  { name: "Airtel", logo: "/clients/airtel-logo.png" },
  { name: "Kalamandir", logo: "/clients/kalamandir-logo.png" },
  { name: "Ben Franklin", logo: "/clients/ben-franklin-logo.png" },
  { name: "BigC Mobiles", logo: "/clients/bigc-mobiles-logo.png" },
]

export default function ClientsSection() {
  return (
    <section className="rounded-lg border border-border bg-card p-6 shadow-xs" aria-labelledby="trusted-brands-heading">
      <div className="mb-6 flex items-center gap-4">
        <h2 id="trusted-brands-heading" className="text-xl font-bold uppercase text-primary sm:text-2xl">Trusted by Leading Brands</h2>
        <span className="h-px w-8 bg-accent" />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {clients.map((client) => (
          <div key={client.name} className="flex min-h-20 items-center justify-center rounded-md border border-border bg-muted/40 p-3">
            <div className="relative h-12 w-full">
              <Image src={client.logo} alt={client.name} fill className="object-contain transition-transform hover:scale-105" sizes="120px" />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">And many more businesses across India</p>
    </section>
  )
}
