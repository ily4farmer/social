'use client';

import { Box, Button, CloseButton, Flex, Image, useToast, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { ApiError } from '~types';

type DropZoneProps = {
  method: 'PATCH' | 'PUT' | 'POST';
  onChange?: (data: unknown) => unknown;
  url: string;
};

export const DropZone = ({ method, onChange, url }: DropZoneProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [files, setFiles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useToast();
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
    <Image
      borderRadius="8px"
      key={file.preview}
      position="absolute"
      zIndex={1}
      src={file.preview}
      onLoad={() => {
        URL.revokeObjectURL(file.preview);
      }}
      w="100%"
      height="100%"
      alt="Картинка"
    />
  ));

  useEffect(() => () => files.forEach((file) => URL.revokeObjectURL(file.preview)), []);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const token = Cookies.get('token');

      const formData = new FormData();

      formData.append('file', files[0]);

      const { data } = await axios({
        baseURL: 'http://localhost:5700/api',
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        method,
        url,
      });

      if (onChange) {
        onChange(data);
      }

      toast({
        duration: 9000,
        isClosable: true,
        position: 'top-right',
        status: 'success',
        title: 'Фото профилья обновлено',
      });
    } catch (error) {
      const err = error as ApiError;

      toast({
        description: err.message,
        duration: 9000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
        title: 'Произошла ошибка',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrap position="relative">
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
      </Box>
      {files.length !== 0 && (
        <Flex
          w="100%"
          h="100%"
          position="absolute"
          alignItems="flex-end"
          justifyContent="center"
          zIndex={10}
        >
          <CloseButton
            onClick={() => setFiles([])}
            position="absolute"
            zIndex={10}
            top={5}
            right={5}
          />
          {thumbs}
          <Button
            variant="primary"
            isLoading={isLoading}
            onClick={onSubmit}
            position="relative"
            mb={2}
            zIndex={10}
          >
            Загрузить
          </Button>
        </Flex>
      )}
    </Wrap>
  );
};
