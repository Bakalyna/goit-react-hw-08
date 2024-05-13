import { Rings } from 'react-loader-spinner';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import styles from '../pagesStyles/contactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles['phonebook-wrapper']}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && (
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass="spinerWrap"
        />
      )}
      {error ? (
        <p>
          Something went wrong! <br /> {error}
        </p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
export default ContactsPage;
