import NextBreadcrumb from '@/components/NextBreadcrumb'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <div style={{ paddingTop: '52px', paddingRight: '30px', paddingBottom: '73px', paddingLeft: '30px', justifyContent: 'center' }}>
        <NextBreadcrumb  />
        </div>
      </div>
    </main>
  )
}
