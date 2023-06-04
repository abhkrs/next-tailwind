
import Benifits from '@/components/Benifits'
import HomeBanner from '@/components/HomeBanner'
import LatestNews from '@/components/LatestNews'
import Sattlement from '@/components/Sattlement'

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Sattlement className = "mb-20" />
      <LatestNews />
      <Benifits />
    </main>
  )
}
