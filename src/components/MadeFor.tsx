import Image from "next/image"

export function MadeFor() {
    return (
        <>
        <h2 className='font-bold text-2xl mt-10'>Made for Caroline Michaelsen</h2>
        <div className='grid grid-cols-4 gap-4 mt-4'>
        <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/discover.png' className='w-full' width={120} height={120} alt='Capa da playlist Discover Weekly.' />
            <strong className='font-semibold'>Discover Weekly</strong>
            <p className='text-sm text-zinc-400'>Your weekly mixtape of fresh music.</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/release.png' className='w-full' width={120} height={120} alt='Capa da playlist Release Radar.' />
            <strong className='font-semibold'>Release Radar</strong>
            <p className='text-sm text-zinc-400'>Catch all the latest music from...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-4 hover:bg-white/10'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix 1 com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Erasmo...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily2.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix 2 com foto de PJ Harvey.' />
            <strong className='font-semibold'>Daily Mix 2</strong>
            <p className='text-sm text-zinc-400'>PJ Harvey, CSS, The Kills and more</p>
          </a>
{/*           <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily3.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix 3 com foto da banda The Kinks.' />
            <strong className='font-semibold'>Daily Mix 3</strong>
            <p className='text-sm text-zinc-400'>The Kinks, Rolling Stones...</p>
          </a> */}
          { /* 
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily4.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix 4 com foto de David Bowie.' />
            <strong className='font-semibold'>Daily Mix 4</strong>
            <p className='text-sm text-zinc-400'>David Bowie, Roy Music, Patti Smith...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily5.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix 5 com álbum do Red Hot Chili Peppers.' />
            <strong className='font-semibold'>Daily Mix 5</strong>
            <p className='text-sm text-zinc-400'>Red Hot Chili Peppers, Mac...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily6.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix 6 com foto do Prince.' />
            <strong className='font-semibold'>Daily Mix 6</strong>
            <p className='text-sm text-zinc-400'>Prince, William Onyeabor, Donna...</p>
    </a> */ }
        </div>
        </>
    )
}