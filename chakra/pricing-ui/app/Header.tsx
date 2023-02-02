import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    // In textAlign base means adjustement for mobile device,md for tablet and lg for desktop.it adjusts page accordingly
    <Box textAlign={{base:"left" ,md:"left" ,lg:"center"}} bg="#6B46C1" pt={"88.45px"} pb={"247px"}  color="white" pl='10px'>
        <Heading pb={"10px"}>
        Simple pricing for your business
        </Heading>
        <Text>
        Plans that are carefully crafted to suit your business.
        </Text>


    </Box>
  )
}
