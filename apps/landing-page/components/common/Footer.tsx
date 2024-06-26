import React, { ReactNode } from 'react'

import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from 'assets/icons/Logo'
import { TextLink } from './TextLink'

// const discordServerUrl = 'https://typebot.io/discord'
// const typebotUrl = 'https://typebot.io'
// const typebotLinkedInUrl = 'https://www.linkedin.com/company/typebot'
// const typebotTwitterUrl = 'https://twitter.com/Typebot_io'
const statusPageUrl = 'https://status.flowdacity.com'
export const contactUrl = 'https://bot.flowdacity.com/landing-page-bubble-en'
export const roadmapLink = 'https://app.flowdacity.com/feedback'
export const documentationLink = 'https://docs.flowdacity.com'
export const githubRepoLink = 'https://github.com/baptisteArno/typebot.io'

export const Footer = () => {
  return (
    <Box w="full">
      <Container as={Stack} maxW={'1000px'} py={10}>
        <SimpleGrid columns={[2, 3, 3]} spacing={8} px={2}>
          <Stack spacing={6}>
            <HStack>
              <Logo boxSize="30px" />
              <Heading as="p" fontSize="lg" color={'blue.500'}>
                Flowdacity.
              </Heading>
            </HStack>
            {/* <Text>
              Portions of Flowdacity are based on{' '}
              <TextLink href={typebotUrl}>Typebot.io</TextLink>, which is
              licensed under the GNU Affero General Public License, Version 3.
            </Text> */}
            <Text>© 2024 Flowdacity. All Rights Reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <TextLink href={statusPageUrl} isExternal>
              Status
            </TextLink>
            <TextLink href={documentationLink} isExternal>
              Documentation
            </TextLink>
            <TextLink href={'/pricing'}>Pricing</TextLink>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <TextLink href="/about">About</TextLink>
            <TextLink href="mailto:admin@flowdacity.com">Contact</TextLink>
            <TextLink href={'/terms-of-service'}>Terms of Service</TextLink>
            <TextLink href={'/privacy-policies'}>Privacy Policy</TextLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Heading fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Heading>
  )
}
