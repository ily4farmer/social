import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = ModalProps & {
  children: ReactNode;
  footer: ReactNode[];
  modalContent?: ModalContentProps;
};

export const Modal = ({ children, footer, modalContent, ...props }: Props) => (
  <ChakraModal {...props}>
    <ModalOverlay />
    <ModalContent {...modalContent}>
      <ModalHeader>Сменить аватар</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>

      <ModalFooter justifyContent="flex-start">
        {footer.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </ModalFooter>
    </ModalContent>
  </ChakraModal>
);
