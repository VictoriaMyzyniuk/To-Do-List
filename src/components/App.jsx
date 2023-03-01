import { Layout } from 'components/Layout/Layout';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { ToDoList } from 'components/ToDoList/ToDoList';

export const App = () => {
  return (
    <Layout>
      <ToDoForm />
      <ToDoList />
    </Layout>
  );
};
