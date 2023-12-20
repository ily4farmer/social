import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = ModalProps & {
  children: ReactNode;
  footer: ReactNode[];
};

export const Modal = ({ children, footer, ...props }: Props) => (
  <ChakraModal {...props}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Сменить аватар</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>

      <ModalFooter justifyContent="flex-start">{footer.map((el) => el)}</ModalFooter>
    </ModalContent>
  </ChakraModal>
);
