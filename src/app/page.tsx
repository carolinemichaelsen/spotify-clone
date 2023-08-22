import { Player } from '@/components/Player'
import { Sidebar } from '@/components/Sidebar'
import { NavigationTop } from '@/components/NavigationTop'
import { RecentPlayed } from '@/components/RecentPlayed'
import { MadeFor } from '@/components/MadeFor'
import { JumpBackIn } from '@/components/JumpBackIn'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-4'>
          <NavigationTop />
          <RecentPlayed />
          <MadeFor />
          <JumpBackIn />
        </main>
      </div>
      <Player />
    </div>

  )
}
