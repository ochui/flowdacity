import { Stack } from '@chakra-ui/react'
import { Footer } from 'components/common/Footer'
import { SocialMetaTags } from 'components/common/SocialMetaTags'
import { EasyBuildingExperience } from 'components/Homepage/EasyBuildingExperience'
import { EasyEmbed } from 'components/Homepage/EasyEmbed'
import { EndCta } from 'components/Homepage/EndCta'
import { Features } from 'components/Homepage/Features'
import { Hero } from 'components/Homepage/Hero'
import { Integrations } from 'components/Homepage/Integrations'
import { IntroducingChatApps } from 'components/Homepage/IntroducingChatApps'
import { RealTimeResults } from 'components/Homepage/RealTimeResults'
import { Testimonials } from 'components/Homepage/Testimonials'

const App = () => {
  return (
    <Stack w="full" overflowX="hidden">
      <SocialMetaTags currentUrl={`https://www.flowdacity.com/`} />
      <Hero />
      <IntroducingChatApps />
      <EasyBuildingExperience />
      <EasyEmbed />
      <Integrations />
      <RealTimeResults />
      <Features />
      <Testimonials />
      <EndCta />
      <Footer />
    </Stack>
  )
}

export default App
