import { Formik } from 'formik';
import { IconContext } from 'react-icons';
import { HiOutlineSearch } from 'react-icons/hi';
import { Layout } from 'components/Layout';
import { Form, Field, Button, Header } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => (
  <Header>
    <Layout>
      <Formik
        initialValues={{
          value: '',
        }}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Button type="submit">
            <IconContext.Provider value={{ color: 'black', size: '22px' }}>
              <HiOutlineSearch />
            </IconContext.Provider>
          </Button>
          <Field
            name="value"
            autoFocus={true}
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </Layout>
  </Header>
);
