import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { getCountry } from "../../api/query/getCountry";
import Loading from "../load/Loading";
import Error from "../load/Error";
import { Box, Flex, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CityCard from "../cards/CityCard";
import { ECardSize } from "../../libs/enum/enum";
import { ICity } from "../../libs/types/type";

function Personal():JSX.Element {
  const id:string = useParams().id || "";
  const {data,isLoading,isError} = useQuery<ICity[]>({
    queryKey:["countries",id],
    queryFn:() => getCountry(id)
  });

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;
  
  return (
    <>
      <Box ml={10} mt={5}>
        <Link to='/' style={{
          color:"blueviolet",
          fontSize:18,
          textDecoration:"underline"
         }}>
         back to main
        </Link>
      </Box>
      <Flex mt={20}
       justifyContent="center"
       w="100%">
       <CityCard
        size={ECardSize.PERSONAL}
        {...data[0]}>
          <>
           <Flex w="90%" mt={1} mb={1}
            justifyContent="space-between"
            fontSize={18} flexWrap="wrap"
            columnGap={5}>
              <Box color="grey">
               {"population: "}
                <Text as="span"
                 color="white">
                  {data[0].population}
                </Text>
              </Box>
              <Box color="grey">
               {"languege: "}
                <Text as="span"
                 color="white">
                  {Object.values(data[0].languages).join(",")}
                </Text>
              </Box>
            </Flex>
            <Box color="grey"
             fontSize={20}>
              {"subregion: "}
              <Text as="span"
               color="white">
                {data[0].subregion}
              </Text>
            </Box>
          </>
        </CityCard>
      </Flex>
    </>
  )
}

export default Personal