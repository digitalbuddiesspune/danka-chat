import Hero from '../components/Hero'
import WelcomeSection from '../components/WelcomeSection'
import DishesCarousel from '../components/DishesCarousel'
import HappinessCard from '../components/HappinessCard'
import OurOffering from '../components/OurOffering'
import InquiryForm from '../components/InquiryForm'
import OurRestaurant from '../components/OurRestaurant'
import ReviewsSlider from '../components/ReviewsSlider'
import HeroSection from '../components/HeroSection'

const HomePage = () => {
  return (
    <div>
      {/* <Hero/> */}
      <HeroSection />
      <WelcomeSection />
      <DishesCarousel />
      <HappinessCard />
      <OurRestaurant />
      <OurOffering/>
      <ReviewsSlider />
      <InquiryForm />
    </div>
  )
}

export default HomePage
