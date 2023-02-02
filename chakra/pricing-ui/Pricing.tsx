
import {Box, Button,Flex,Heading,Spacer,Text,Icon, HStack} from '@chakra-ui/react'
import React from 'react'
import checkMarkIcon from './checkMarkIcon'

export default function Pricing() {
  return (
//   box container starts here 'm' stands for margin mt:margintop,mb:margingbottom,pt:paddingtop,pb:paddingbottom 
// borderRadius used for rounding edge of box.overflow='hidden' apply effect to all corners maxW used to adjust width as per device screen
 <Box maxW={'970px'} m='auto' mt='-200px' bg='white' borderRadius={'16px'} overflow='hidden'  mx={{base:"20px",lg:"auto"}}
 boxShadow= {"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}>  
    <Flex direction={{base:"column",md:"column",lg:"row"}} >
    {/* left box starts here */}
    {/* p adds a padding in all sides left,right,top,bottom */}
  <Box width='378px' height='336 px'  bg= '#e2d6f9' textAlign={'center'} p='60px'
 >
  <Text color={'#171923'} fontWeight='bold' fontSize={'24 px'} >  Premium PRO   </Text>
  <Heading fontSize={'60px'}>$329</Heading>
  <Text fontSize={'18px'}>billed just once</Text>
  <Button bg='#805AD5' color={'white'} w='300px'>Get Started</Button>
  </Box>
  {/* <Spacer /> spacer tag is used for spacing between two boxes */}
  {/* right box start here */}
  {/* By default everthing stacks vertically in <text> tag.for horizantal staking use <Hstack> tag */}
  
  <Box pt='50px' pl='25px' w='500' >
 <Text pb='10px'>Access these features when you get this pricing package for your business.</Text> 
<HStack mb='10px'>
    <Icon as={checkMarkIcon} />
    <Text mt='15px' >International calling and messaging API</Text> 
 </HStack>
 <HStack mb='10px'>
 <Icon as={checkMarkIcon} />
    <Text mt='15px'>Additional phone numbers</Text>
    </HStack>

    <HStack mb='10px'>
        <Icon as={checkMarkIcon} />
 <Text mt='15px'>Automated messages via Zapier</Text>
 </HStack>
 

 <HStack mb='10px'>
    <Icon as={checkMarkIcon} />
 <Text mt='15px'>24/7 support and consulting</Text>
 </HStack>

 </Box>

 
   
</Flex>


</Box>
  )
}
