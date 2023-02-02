import React from 'react'
import { Heading,Text } from '@chakra-ui/react'

export default function Practise() {
  return (
<>  
    <h1> Hello World</h1>
    <h2>Hello World</h2>
    <h3>Hello World</h3>
    <Heading> This is chakra heading</Heading>
    <Heading as="h3" color={"red"} fontSize="40px"> This is heading using prop "as"</Heading>
    <Text fontWeight={"bold"}>This is paragraph alternative of html in chakra</Text>
    <p>This is paragraph tag in  "html"</p>
  </>
  )
}
