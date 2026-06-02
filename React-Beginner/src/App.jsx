import Header from './components/header'
import HeroSection from './components/hero-section'
import FeatureSection from './components/feature-section'
import TrustSection from './components/trust-section'
import Footer from './components/footer'
import hotItemImg from './assets/hot_item.png'
import searchImg from './assets/search.png'
import registerImg from './assets/register.png'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection
        tag="Hot Item"
        title={"인기 상품을\n확인해 보세요"}
        description={"가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해 보세요"}
        image={hotItemImg}
        imagePosition="right"
      />
      <FeatureSection
        tag="Search"
        title={"구매를 원하는\n상품을 검색하세요"}
        description={"구매하고 싶은 물품을 검색해서\n쉽게 찾아보세요"}
        image={searchImg}
        imagePosition="left"
      />
      <FeatureSection
        tag="Register"
        title={"판매를 원하는\n상품을 등록하세요"}
        description={"어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요"}
        image={registerImg}
        imagePosition="right"
      />
      <TrustSection />
      <Footer />
    </>
  )
}

export default App
