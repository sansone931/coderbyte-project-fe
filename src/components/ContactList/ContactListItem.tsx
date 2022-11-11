import { FC } from 'react';

import { Button } from '../Button';
import {
  ButtonContainer,
  FullName,
  ItemContainer,
  PhoneNumber,
} from './styled';

export type ContactListItemProps = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  onDeleteClick: (id: string) => void;
  onEditClick: (id: string) => void;
};

export const ContactListItem: FC<ContactListItemProps> = ({
  id,
  firstName,
  lastName,
  phoneNumber,
  onDeleteClick,
  onEditClick,
}) => (
  <ItemContainer>
    <div>
      <FullName>
        {firstName} {lastName}
      </FullName>
      <PhoneNumber>{phoneNumber}</PhoneNumber>
    </div>
    <ButtonContainer>
      <Button variant="primary" onClick={() => onEditClick(id)}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => onDeleteClick(id)}>
        Delete
      </Button>
    </ButtonContainer>
  </ItemContainer>
);
