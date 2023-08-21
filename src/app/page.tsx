import { Player } from '@/components/Player'
import { Sidebar } from '@/components/Sidebar'
import { NavigationTop } from '@/components/NavigationTop'
import { RecentPlayed } from '@/components/RecentPlayed'
import { MadeFor } from '@/components/MadeFor'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-6'>
          <NavigationTop />
          <RecentPlayed />
          <MadeFor />
        </main>
      </div>
      <Player />
    </div>

  )
}
