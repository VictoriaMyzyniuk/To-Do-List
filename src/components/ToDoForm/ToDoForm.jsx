import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from 'redux/actions';

import {
  ErrorMessage,
  InputEl,
  FormEl,
  LabelEl,
} from 'components/ToDoForm/ToDoForm.styled';
export const ToDoForm = () => {
  const dispatch = useDispatch();
  const [titleError, setTitleError] = useState(false);
  const [descriprionError, setDescriptionError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const titleText = form.elements.title.value;
    const descriptionText = form.elements.description.value;

    setTitleError(!titleText);
    setDescriptionError(!descriptionText);
    if (titleText && descriptionText) {
      dispatch(addToDo(titleText, descriptionText));
      form.reset();
    }
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <LabelEl>
        Title:
        <InputEl
          type="text"
          name="title"
          placeholder="Enter title"
          error={titleError}
        />
        <ErrorMessage error={descriprionError}>
          This field is empty
        </ErrorMessage>
      </LabelEl>

      <LabelEl>
        Description:
        <InputEl
          type="text"
          name="description"
          placeholder="Enter description"
          error={descriprionError}
        />
        <ErrorMessage error={descriprionError}>
          This field is empty
        </ErrorMessage>
      </LabelEl>

      <Button type="submit">Create</Button>
    </FormEl>
  );
};
