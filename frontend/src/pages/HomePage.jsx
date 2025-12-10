import Hero from '../components/Hero'
import WelcomeSection from '../components/WelcomeSection'
import DishesCarousel from '../components/DishesCarousel'
import HappinessCard from '../components/HappinessCard'
import OurOffering from '../components/OurOffering'
import InquiryForm from '../components/InquiryForm'
import OurRestaurant from '../components/OurRestaurant'

const HomePage = () => {
  return (
    <div>
   
      <WelcomeSection />
      <DishesCarousel />
      <HappinessCard />
      <OurRestaurant />
      <InquiryForm />
    </div>
  )
}

export default HomePage
