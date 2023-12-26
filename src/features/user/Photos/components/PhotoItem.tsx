import { Link } from '@chakra-ui/next-js';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

type PhotoProps = {
  id: number;
  image: string;
  index: number;
  lenght: number;
  onOpen: () => void;
};

export const PhotoItem = ({ id, image, index, lenght, onOpen }: PhotoProps) => {
  const param = useParams();

  if (index === 4) {
    return (
      <Flex
        h={180}
        alignItems="center"
        justifyContent="center"
        border="1px solid #1C2D50"
        borderRadius="8px"
        cursor="pointer"
        onClick={onOpen}
      >
        <Text>Посмотреть все</Text>
      </Flex>
    );
  }

  return (
    <Link href={`/users/${param.id}/photo/${id}`}>
      <Flex flexDirection="column" alignItems="flex-start" cursor="pointer">
        <Image h={180} src={image} alt="image" borderRadius="8px" />
      </Flex>
    </Link>
  );
};
