import Image from "next/image"

export function MadeFor() {
    return (
        <>
        <h2 className='font-semibold text-2xl mt-10'>Made for Caroline Michaelsen</h2>
        <div className='grid grid-cols-8 gap-4 mt-4'>
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-4 hover:bg-white/10'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-4 hover:bg-white/10'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
        </div>
        </>
    )
}