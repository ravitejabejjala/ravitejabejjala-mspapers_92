import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Leaf, Factory, Target, Eye, CheckCircle2, Quote, Phone, Mail, MapPin } from "lucide-react"
import { business } from "@/lib/business-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About MS Paper Products | Hyderabad Paper Bag & Packaging Manufacturer",
  description:
    "MS Paper Products is a Hyderabad-based manufacturer of eco-friendly paper bags, custom packaging boxes, and commercial printing. Led by Pravalika, we serve 500+ businesses across India.",
  alternates: { canonical: "https://mspaperproducts.com/about" },
}

const pillars = [
  { icon: Leaf, title: "Sustainability First", body: "We prioritize biodegradable, recyclable, and responsibly sourced paper materials. Our processes minimize waste and reduce environmental footprint without sacrificing durability or aesthetic appeal." },
  { icon: Factory, title: "State-of-the-Art Production", body: "Equipped with advanced Lithrone 5-colour offset and digital presses, specialised bag-making machinery, and UV foiling units, we maintain strict quality checks at every stage." },
  { icon: Award, title: "Reliable Bulk Execution", body: "From short-run custom projects to multi-ton corporate runs, our streamlined workflow guarantees transparent turnaround times and on-time PAN India delivery." },
]

const stats = [
  { value: "500+", label: "Business Clients" },
  { value: "10M+", label: "Bags Produced" },
  { value: "15+", label: "Years in Industry" },
  { value: "100%", label: "Eco-Friendly Materials" },
]

const whyUs = [
  { icon: Award, title: "Premium Quality", desc: "Finest materials and precision printing techniques for every order." },
  { icon: Users, title: "Expert Team", desc: "Skilled professionals with decades of combined packaging expertise." },
  { icon: Leaf, title: "Eco-Friendly", desc: "100% recyclable and biodegradable material options available." },
  { icon: Factory, title: "Modern Facility", desc: "State-of-the-art Lithrone printing with gold foiling and die-cutting." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* ── Company Intro ──────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
              <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">Empowering Sustainable Packaging & Premium Printing</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                At MS Paper Products, we believe packaging is more than just a wrapper—it is the first tangible promise your brand makes to a customer. Headquartered in Hyderabad, Telangana, we are a leading manufacturer of premium eco-friendly paper bags, custom packaging boxes, and high-precision commercial printing.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Driven by innovation, quality craftsmanship, and environmental responsibility, we help over <strong className="text-primary">500+ businesses across India</strong> elevate their brand presence with sustainable, reliable, and cost-effective solutions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-border bg-card p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-accent">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/about/indian-manufacturing-team.png"
                alt="MS Paper Products manufacturing team at work in Hyderabad"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">Our manufacturing facility in Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Story ──────────────────────────────── */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/about/founder-pravalika.png"
                alt="Pravalika, Founder and Managing Director of MS Paper Products"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Leadership</p>
              <h2 className="text-3xl font-bold md:text-4xl">Led by Passion, Driven by Purpose</h2>
              <p className="mt-5 leading-relaxed text-primary-foreground/80">
                MS Paper Products is proudly founded and managed by <strong className="text-accent">Pravalika</strong>, a dynamic woman entrepreneur with extensive expertise in eco-friendly packaging and commercial printing. Under her visionary leadership, we have grown into a trusted packaging partner for retail, pharmaceuticals, real estate, FMCG, education, and corporate enterprises.
              </p>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">
                Her hands-on approach, commitment to sustainable materials, and obsession with quality control ensure every client receives personalised attention and production excellence — from design to final delivery.
              </p>
              <div className="mt-8 rounded-xl border border-accent/30 bg-primary-foreground/5 p-5">
                <Quote className="mb-3 size-6 text-accent" />
                <blockquote className="text-sm leading-relaxed italic text-primary-foreground/90">
                  "Our mission is simple: to provide businesses with world-class printing and packaging that doesn't cost the Earth. We are building a future where sustainable choices are seamless, affordable, and uncompromised on quality."
                </blockquote>
                <p className="mt-3 text-sm font-bold text-accent">— Pravalika, Founder & Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ─────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">What We Do</h2>
            <p className="mt-4 text-muted-foreground">End-to-end manufacturing and commercial printing services engineered for bulk B2B orders.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Eco-Friendly Paper Bags", items: ["Kraft paper bags", "Retail shopping bags", "Food delivery bags", "Luxury rope-handle bags", "Fully customised brand bags"] },
              { title: "Custom Packaging Solutions", items: ["Corrugated boxes", "Mono cartons", "Pharmaceutical packaging", "Courier covers", "Eco-conscious food containers"] },
              { title: "Commercial Printing Services", items: ["High-volume offset printing", "Short-run digital printing", "Corporate brochures & catalogues", "Flyers and booklets", "Business cards and letterheads"] },
            ].map((col) => (
              <div key={col.title} className="rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:border-accent/50 hover:shadow-md">
                <h3 className="text-lg font-bold text-primary">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Pillars ───────────────────────────────── */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Our Core Pillars</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
                <div className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                  <p.icon className="size-6 text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Our Mission & Vision</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex size-14 items-center justify-center rounded-full bg-accent/10">
                  <Target className="size-7 text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">Our Mission</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To deliver innovative, sustainable, and high-performance packaging and printing solutions that empower businesses to grow responsibly while upholding the highest standards of craftsmanship.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex size-14 items-center justify-center rounded-full bg-accent/10">
                  <Eye className="size-7 text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">Our Vision</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To be India's premier female-led eco-friendly packaging and commercial printing manufacturer, driving the industry transition toward plastic-free, circular packaging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────── */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <Card key={item.title} className="shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/10">
                    <item.icon className="size-7 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Callout ────────────────────────────── */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Partner With Us Today</h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">
                Whether you need 5,000 custom kraft paper bags for your retail chain or 50,000 corporate brochures for an upcoming launch, Pravalika and the MS Paper Products team are here to turn your vision into reality.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </Button>
              </div>
            </div>
            <address className="not-italic">
              <ul className="flex flex-col gap-4 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-accent" /><a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{business.address}</a></li>
                <li className="flex items-center gap-3"><Phone className="size-5 shrink-0 text-accent" /><a href={business.phoneHref} className="hover:text-accent">{business.phoneDisplay}</a></li>
                <li className="flex items-center gap-3"><Mail className="size-5 shrink-0 text-accent" /><a href={`mailto:${business.email}`} className="hover:text-accent">{business.email}</a></li>
              </ul>
            </address>
          </div>
        </div>
      </section>
    </main>
  )
}
