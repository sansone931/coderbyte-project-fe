import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Modal, type ModalProps } from './Modal';

type Args = ModalProps;

const meta: Meta<Args> = {
  component: Modal,
  args: {
    children: 'Modal content',
  },
};
export default meta;

export const Default: Story<Args> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="primary"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};
