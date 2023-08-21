import { Play } from 'lucide-react'
import Image from 'next/image'


export function RecentPlayed() {
    return (
        <>
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
        </>
    )
}