import { Formik } from 'formik';
import { IconContext } from 'react-icons';
import { HiOutlineSearch } from 'react-icons/hi';
import * as Yup from 'yup';
import { Layout } from 'components/Layout';
import { Form, Field, Button, Header, ErrorMessage } from './Searchbar.styled';

const SignupSchema = Yup.object().shape({
  value: Yup.string().required('Please enter a value'),
});
export const Searchbar = ({ onSubmit }) => (
  <Header>
    <Layout>
      <Formik
        initialValues={{
          value: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          // actions.resetForm();
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
          <ErrorMessage name="value" component="div" className="error" />
        </Form>
      </Formik>
    </Layout>
  </Header>
);
