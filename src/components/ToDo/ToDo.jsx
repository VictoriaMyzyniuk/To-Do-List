import { useState } from 'react';
import {
  Card,
  CardItemId,
  CardItemTitle,
  CardItemDesc,
} from 'components/ToDo/ToDo.styled';

import { Modal } from 'components/Modal/Modal';

export const ToDo = ({ toDo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Card id={toDo.id} onClick={toggleModal}>
        <CardItemId>{toDo.id}</CardItemId>
        <CardItemTitle>{toDo.title}</CardItemTitle>
        <CardItemDesc>{toDo.description}</CardItemDesc>
        <input type="checkbox" checked={toDo.status} readOnly />
      </Card>

      {isModalOpen && <Modal toDo={toDo} toggleModal={toggleModal} />}
    </>
  );
};
