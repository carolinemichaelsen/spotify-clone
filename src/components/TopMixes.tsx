import Image from "next/image"

export function TopMixes() {
    return (
        <div>
        <h2 className='font-semibold text-2xl mt-10'>Jump back in</h2>
        <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded flex-col gap-2 hover:bg-white/10'>
                    <Image src='/70smix.png' className='w-full' width={120} height={120} alt='Capa da playlist 70s Mix com foto da banda ABBA.' />
                    <strong className='font-semibold'>70s Mix</strong>
                    <p className='text-sm text-zinc-400'>ABBA, Secos & Molhados, Rita...</p>
                </a>
        </div>
        </div>
    )
}
