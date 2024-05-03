
import {useQuery} from '@tanstack/react-query';
import React from 'react'
import { getCountries } from '../../api/query/getCountries';
import Loading from '../load/Loading';
import Error from '../load/Error';
import { Flex } from '@chakra-ui/react';
import { ICity } from '../../libs/types/type';
import { useNavigate } from 'react-router-dom';
import CityCard from '../cards/CityCard';
import { ECardSize } from '../../libs/enum/enum';

function Main():JSX.Element {
  const navigate = useNavigate();
  const {data,isLoading,isError} = useQuery({
    queryKey:["countries"],
    queryFn:getCountries
  });

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  return (
    <Flex w="100%" gap={20}
     justifyContent="center"
     alignItems="center"
     flexWrap="wrap" mt={10}>
      {data.map((c:ICity):JSX.Element => (
        <CityCard key={c.name}
         onClick={() => navigate(`/${c.name.common}`)}
         size={ECardSize.HOME}
         {...c}
         />
      ))}
    </Flex>
  )
}

export default Main