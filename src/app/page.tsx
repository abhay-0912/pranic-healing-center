import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import CoursesSection from '@/components/CoursesSection'
import BookingWidget from '@/components/BookingWidget'
import MeditationPlayer from '@/components/MeditationPlayer'
import CommunitySection from '@/components/CommunitySection'
import ActionCardsSection from '@/components/ActionCardsSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <MeditationPlayer />
      <BookingWidget />
      <CoursesSection />
      <CommunitySection />
      <ActionCardsSection />
    </div>
  )
}
