import { Home as HomeIcon, Search, Library } from 'lucide-react'


export function Sidebar() {
    return (
        <aside className='w-72 bg-zinc-950 p-1'>
{/*         <div className='flex itens-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div> */}
        <nav className='space-y-2 bg-zinc-900 rounded-md p-2'>
          <a href='' className='flex itens-center gap-3 text-s font-semibold text-zinc-400 hover:text-white'>
            <HomeIcon />
            Home
          </a>
          <a href='' className='flex itens-center gap-3 text-s font-semibold text-zinc-400 hover:text-white'>
            <Search />
            Search
          </a>

        </nav>

        <nav className='mt-1 pt-6 border-t border-zinc-800 flex flex-col gap-3 bg-zinc-900 rounded-md p-2'>
          <a href='' className='flex gap-3 text-s font-semibold text-zinc-400 hover:text-white'>
            <Library />Your Library
          </a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Release Radar</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Liked Songs</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Funk Hits 2</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>All Out 70s</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Daily Mix 4</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>This is Gal Costa</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Door Knockers</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>IBORU</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>Disco Fever</a>
          <a href="" className='text-s text-zinc-400 hover:text-zinc-100'>90s House Classic</a>
        </nav>
      </aside>
    )
}