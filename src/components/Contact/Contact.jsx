import css from './Contact.module.css';

import { FaUser } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const Contact = ({ userContact }) => {
  const { id, name, number } = userContact;
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <div className={css['contact-wrap-main']}>
        <div className={css['contact-wrap']}>
          <FaUser />
          <p className={css['contact-text']}>{name}</p>
        </div>
        <div className={css['contact-wrap']}>
          <BsTelephone />
          <p className={css['contact-text']}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        name="delete"
        onClick={() => {
          toast(() => (
            <span>
              Are you sure?
              <button
                onClick={t => {
                  dispatch(deleteContact(id));
                  toast.dismiss(t.id);
                }}
              >
                Delete
              </button>
            </span>
          ));
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
