'use client';

import { Box, CloseButton, Flex, Image, Wrap } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

type DropZoneProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFiles: Dispatch<SetStateAction<any[]>>;
};

export const DropZone = ({ files, setFiles }: DropZoneProps) => {
  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const thumbs = files.map((file) => (
    <Flex key={file.name} w="100%" height="100%">
      <Image
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        w="100%"
        height="100%"
        alt="Картинка"
      />
    </Flex>
  ));

  useEffect(() => () => files.forEach((file) => URL.revokeObjectURL(file.preview)), []);

  return (
    <Box {...getRootProps()} border="2px dashed gray" borderRadius="lg" height={400} w={300}>
      <input {...getInputProps()} />
      <Wrap
        display={!files.length ? 'flex' : 'none'}
        w="100%"
        height="100%"
        alignItems="center"
        textAlign="center"
        padding="10px"
      >
        Кликните или перетащите файл сюда
      </Wrap>
      {files.length && (
        <Flex w="100%" h="100%" position="relative" zIndex={10}>
          <CloseButton onClick={() => setFiles([])} position="absolute" top={5} right={5} />
          {thumbs}
        </Flex>
      )}
    </Box>
  );
};
