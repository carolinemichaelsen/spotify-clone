import { Shuffle, Mic2, Maximize2, Repeat } from 'lucide-react'
import { AiOutlinePlaySquare, AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { HiOutlineQueueList } from 'react-icons/hi2'
import { TbDevices2 } from 'react-icons/tb'
import Image from 'next/image'
import { BsFillVolumeDownFill, BsFillPlayFill } from 'react-icons/bs'

export function Player() {
    return (
        <footer className='bg-black border-t border-zinc-900 px-2 py-2 flex items-center justify-between fixed insert-x-0 bottom-0 w-full'>
        <div className='flex items-center gap-3'>
          <Image src='/jackie.png' className='w-full' width={56} height={56} alt='' />
          <div className='flex flex-col'>
            <strong className='font-normal'>Strawberry Letter 23</strong>
            <span className='text-xs text-zinc-400'>The Brothers Johnson</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-4'>
            <Shuffle size={20} className='text-zinc-400'/>
            <AiFillStepBackward size={20} className='text-zinc-400'/>
            <button className='w-6 h-6 flex items-center justify-center rounded-full bg-white text-black'>
                < BsFillPlayFill />
              </button>
            <AiFillStepForward size={20} className='text-zinc-400'/>
            <Repeat size={20} className='text-zinc-400'/>
          </div>
            <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>2:12</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-300 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>4:59</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <AiOutlinePlaySquare size={20} className='text-zinc-400 active:text-green-500 hover:text-white cursor-pointer' />
          <Mic2 size={20} className='text-zinc-400 active:text-green-500 hover:text-white cursor-pointer'/>
          <HiOutlineQueueList className='text-zinc-400 active:text-green-500 hover:text-white cursor-pointer'/>
          <TbDevices2 size={20} className='text-zinc-400 active:text-green-500 hover:text-white cursor-pointer'/>
          <div className='flex items-center gap-4'>
            <BsFillVolumeDownFill size={20} className='text-zinc-400'/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-400 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} className='text-zinc-400 hover:text-white cursor-pointer'/>
        </div>
      </footer>
    )
}