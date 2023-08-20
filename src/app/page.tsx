import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex itens-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex itens-center gap-3 text-s font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="">
              <Search />
              Search
            </a>
            <a href="">
              <Library />
              Sua Biblioteca
            </a>
          </nav>
          
          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 1</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 2</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 3</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 4</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 5</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 6</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 7</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 8</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 9</a>
            <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Playlist 10</a>
          </nav>
        </aside>
        <main className='flex-1 p-6'>
        <div className='flex items-center gap-4'>
          <button className='rounded-full bg-black/40 p-1'>
            <ChevronLeft />
          </button>
          <button>
            <ChevronRight />
          </button>
        </div>
        <h1 className='font-semibold text-3xl mt-10'>Good evening</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/iboru.png' width={104} height={104} alt='Capa do álbum Iboru, de Marcelo D2' />
            <strong>Iboru</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < Play />
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/jackie.png' width={104} height={104} alt='Capa do álbum Jackie Brown Soudtrack' />
            <strong>Jackie Brown</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < Play />
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/iboru.png' width={104} height={104} alt='Capa do álbum Iboru, de Marcelo D2' />
            <strong>Iboru</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < Play />
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/iboru.png' width={104} height={104} alt='Capa do álbum Iboru, de Marcelo D2' />
            <strong>Iboru</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < Play />
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/iboru.png' width={104} height={104} alt='Capa do álbum Iboru, de Marcelo D2' />
            <strong>Iboru</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < Play />
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/iboru.png' width={104} height={104} alt='Capa do álbum Iboru, de Marcelo D2' />
            <strong>Iboru</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < Play />
            </button>
          </div>
        </div> 
        <h2 className='font-semibold text-2xl mt-10'>Made for Caroline Michaelsen</h2>
        <div className='grid grid-cols-8 gap-4 mt-4'>
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-4'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-4'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
          <a href='' className='bg-white/5 p-3 rounded flex-col gap-2'>
            <Image src='/daily1.png' className='w-full' width={120} height={120} alt='Capa da playlist Daily Mix com foto do Tim Maia.' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <p className='text-sm text-zinc-400'>Tim Maia, Jorge Ben Jor, Eras...</p>
          </a>
        </div>

        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>footer</footer>
    </div>
  )
}
