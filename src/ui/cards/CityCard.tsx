import React from 'react'
import { ICity } from '../../../libs/types/type'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { ECardSize } from '../../libs/enum/enum'

interface IProps extends ICity {
  onClick?:() => void,
  size:ECardSize,
  children?:JSX.Element
}

function CityCard({
    name,
    region,
    flags,
    capital,
    size,
    children,
    onClick
}:IProps):JSX.Element {
  return (
    <Flex w={size}
     justifyContent="center"
     bg="rgb(60,60,60)"
     overflow="hidden"
     borderRadius={10}
     boxShadow="1px 3px 3px 1px grey"
     onClick={() => onClick ? onClick() : null}
     alignItems="center" pl={10} pr={10}
     boxSizing="border-box"
     flexDir="column">
       <Image mt={2}
        borderRadius={10}
        src={flags.svg || flags.png}
        alt=''
       />
       <Box fontSize={23}
        color="white" mt={5}>
          {name.common}
       </Box>
       <Flex w="90%" mt={1} mb={1}
        justifyContent="space-between"
        fontSize={18} flexWrap="wrap"
        columnGap={5}>
         <Box color="grey">
            {"region: "}
            <Text as="span"
             color="white">
              {region}
            </Text>
         </Box>
         <Box color="grey">
           {"capital: "}
           <Text as="span"
            color="white">
             {capital[0]}
           </Text>
         </Box>
       </Flex>
       {children}
    </Flex>
  )
}

export default CityCard