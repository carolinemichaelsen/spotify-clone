import { ChevronLeft, ChevronRight } from "lucide-react"

export function NavigationTop() {
    return (
        <div className='flex items-center gap-4'>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronLeft />
        </button>
        <button>
          <ChevronRight />
        </button>
      </div>
    )
}