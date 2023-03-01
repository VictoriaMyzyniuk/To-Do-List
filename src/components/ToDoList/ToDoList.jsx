import {
  ListHeader,
  ListEl,
  ItemEl,
  ItemListHeader,
} from 'components/ToDoList/ToDoList.styled';
import { ToDo } from 'components/ToDo/ToDo';
import { getToDo } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ToDoList = () => {
  const toDo = useSelector(getToDo);

  return (
    <>
      <ListHeader>
        <ItemListHeader>ID</ItemListHeader>
        <ItemListHeader>TITLE</ItemListHeader>
        <ItemListHeader>DESCRIPTION</ItemListHeader>
        <ItemListHeader>STATUS</ItemListHeader>
      </ListHeader>

      <ListEl>
        {toDo.map(toDo => (
          <ItemEl key={toDo.id}>
            <ToDo toDo={toDo} />
          </ItemEl>
        ))}
      </ListEl>
    </>
  );
};
