import {
  Overlay,
  ModalEl,
  ModalTitle,
  ModalDescriptionTitle,
  ModalDescription,
  ModalStatus,
  ButtonModal,
} from 'components/Modal/Modal.styled';
import { useDispatch } from 'react-redux';
import { toggleStatus } from 'redux/actions';

export const Modal = ({ toDo, toggleModal }) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleStatus(toDo.id));

  return (
    <Overlay>
      <ModalEl>
        <ModalTitle>{toDo.title}</ModalTitle>
        <ModalDescriptionTitle>Description:</ModalDescriptionTitle>
        <ModalDescription> {toDo.description}</ModalDescription>
        <ModalStatus>
          Status: &nbsp;
          <input
            type="checkbox"
            checked={toDo.status}
            onChange={handleToggle}
          />
        </ModalStatus>

        <ButtonModal onClick={toggleModal}>Close</ButtonModal>
      </ModalEl>
    </Overlay>
  );
};
