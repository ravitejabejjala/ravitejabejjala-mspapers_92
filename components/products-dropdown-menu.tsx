'use client'

import Link from 'next/link'
import { ShoppingBag, Package, Calendar, Coffee, Leaf, Printer, ChevronDown, Truck, Barcode } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ProductsDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-sm font-medium text-white hover:text-[#f19e1f] gap-1 px-0"
        >
          Products & Services
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 bg-white">
        {/* Section 1: Packaging */}
        <DropdownMenuLabel className="text-[#132635] font-semibold">Packaging</DropdownMenuLabel>
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-[#132635]">
            <ShoppingBag className="h-4 w-4 text-[#f19e1f]" />
            <span>Paper Bags</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-white">
            <DropdownMenuItem asChild>
              <Link href="/products/kraft-paper-bags">Kraft Paper Bags</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/printed-paper-bags">Printed Paper Bags</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/custom-paper-bags">Custom Paper Bags</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/eco-friendly-paper-bags">Eco-Friendly Bags</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-[#132635]">
            <Package className="h-4 w-4 text-[#f19e1f]" />
            <span>Boxes & Cartons</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-white">
            <DropdownMenuItem asChild>
              <Link href="/products/paper-boxes">Paper Boxes</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/gift-boxes">Gift Boxes</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/corrugated-carton-boxes">Corrugated Cartons</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/pharmaceutical-packaging-boxes">Pharma Boxes</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-[#132635]">
            <Calendar className="h-4 w-4 text-[#f19e1f]" />
            <span>Calendars & Diaries</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-white">
            <DropdownMenuItem asChild>
              <Link href="/products/table-calendars">Table Calendars</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/wall-calendars">Wall Calendars</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/corporate-diaries">Corporate Diaries</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        {/* Section 2: Specialized Solutions */}
        <DropdownMenuLabel className="text-[#132635] font-semibold">Specialized</DropdownMenuLabel>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-[#132635]">
            <Coffee className="h-4 w-4 text-[#f19e1f]" />
            <span>Food & Beverage</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-white">
            <DropdownMenuItem asChild>
              <Link href="/products/food-grade-packing">Food Grade Pouches</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/paper-cups">Paper Cups</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/paper-food-boxes">Food Boxes</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuItem asChild>
          <Link href="/products/eco-friendly-solutions" className="text-[#132635]">
            <Leaf className="h-4 w-4 text-green-600" />
            <span>Eco-Friendly Solutions</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Section 3: E-Commerce Solutions */}
        <DropdownMenuLabel className="text-[#132635] font-semibold">E-Commerce</DropdownMenuLabel>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-[#132635]">
            <Truck className="h-4 w-4 text-[#f19e1f]" />
            <span>Ecommerce Covers</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-white">
            <DropdownMenuItem asChild>
              <Link href="/products/ecommerce-courier-covers">Ecommerce Courier Covers</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/paper-courier-covers">Paper Courier Covers</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/waterproof-shipping-bags">Waterproof Shipping Bags</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/branded-courier-covers">Branded Courier Covers</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-[#132635]">
            <Barcode className="h-4 w-4 text-[#f19e1f]" />
            <span>Thermal Paper Rolls</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-white">
            <DropdownMenuItem asChild>
              <Link href="/products/thermal-label-rolls">Thermal Label Rolls</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/4x6-thermal-labels">4x6 Thermal Labels</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/barcode-label-rolls">Barcode Label Rolls</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/products/waterproof-thermal-labels">Waterproof Thermal Labels</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        {/* Section 4: Services */}
        <DropdownMenuLabel className="text-[#132635] font-semibold">Services</DropdownMenuLabel>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="text-[#132635]">
            <Printer className="h-4 w-4 text-[#f19e1f]" />
            <span>Printing Services</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="bg-white">
            <DropdownMenuItem asChild>
              <Link href="/printing-services/offset-printing">Offset Printing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/printing-services/digital-printing">Digital Printing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/printing-services/brochure-printing">Brochure Printing</Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
