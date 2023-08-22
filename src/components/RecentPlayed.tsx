import { BsFillPlayFill } from 'react-icons/bs'
import Image from 'next/image'


export function RecentPlayed() {
    return (
        <>
        <h1 className='font-semibold text-3xl mt-5'>Good evening</h1>
        <div className='grid grid-cols-3 gap-4'>
        <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/jackie.png' width={104} height={104} alt='Capa do álbum Jackie Brown Soudtrack' />
            <strong>Jackie Brown</strong>
            <button className='w-8 h-8 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < BsFillPlayFill size={28}/>
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/ritalee.png' width={104} height={104} alt='Capa do álbum Rita Lee.' />
            <strong>Rita Lee</strong>
            <button className='w-8 h-8 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < BsFillPlayFill size={28} />
            </button>
          </div>

          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/iboru.png' width={104} height={104} alt='Capa do álbum Iboru, de Marcelo D2.' />
            <strong>IBORU</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < BsFillPlayFill />
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/allout70s.png' width={104} height={104} alt='Capa da Playlist All Out 70s com foto de David Bowie.' />
            <strong>All Out 70s</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < BsFillPlayFill />
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/sambaesquema.png' width={104} height={104} alt='Capa do álbum Samba Esquema Novo, de Jorge Ben Jor.' />
            <strong>Samba Esquema Novo</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < BsFillPlayFill />
            </button>
          </div>
          <div className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden mt-4 hover:bg-white/10 transition-colors cursor-pointer'>
            <Image src='/renaissance.png' width={104} height={104} alt='Capa do álbum RENAISSANCE, de Beyoncé.' />
            <strong>RENAISSANCE</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              < BsFillPlayFill />
            </button>
          </div>
        </div>
        </>
    )
}