import Link from 'next/link'

export default function Home() {

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Link href="/privacy" className='text-3xl'>Privacy</Link>
      <Link href="/user-agreement" className='ml-8 text-3xl'>User Agreement</Link>
    </div>
  )
}
