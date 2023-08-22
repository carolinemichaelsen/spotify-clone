import Image from "next/image"

export function JumpBackIn() {
    return (
        <div>
            <h2 className='font-bold text-2xl mt-10'>Jump back in</h2>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
                <Image src='/release.png' className='w-full' width={120} height={120} alt='Capa da playlist Release Radar.' />
                <strong className='font-semibold'>Release Radar</strong>
                <p className='text-sm text-zinc-400'>Catch all the latest music from...</p>
                </a>
                <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
                <Image src='/parade.png' className='w-full' width={120} height={120} alt='Capa da playlist Release Radar.' />
                <strong className='font-semibold'>Parede</strong>
                <p className='text-sm text-zinc-400'>Prince</p>
                </a>                
                <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
                <Image src='/iboru.png' className='w-full' width={120} height={120} alt='Capa da playlist Release Radar.' />
                <strong className='font-semibold'>IBORU</strong>
                <p className='text-sm text-zinc-400'>Marcelo D2</p>
                </a>
                <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
                <Image src='/that.png' className='w-full' width={120} height={120} alt='Capa da playlist Release Radar.' />
                <strong className='font-semibold'>That! Feels Good</strong>
                <p className='text-sm text-zinc-400'>Jessie Ware</p>
                </a>
            </div>
        </div>
    )
}