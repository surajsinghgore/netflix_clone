import './App.css'
import { HomeBanner, HomeTrendingSection } from './components'
import FrequentlyQuestions from './components/HomePage/FrequentlyQuestions'
import MoreReasonToJoin from './components/HomePage/MoreReasonToJoin'

function App() {

  return (
    <>
      <HomeBanner />
      <div className='bg-black '>
<div className="w-[80%] m-auto">

      <HomeTrendingSection />
      <MoreReasonToJoin />
      <FrequentlyQuestions />
</div>
      </div>
    </>
  )
}

export default App
