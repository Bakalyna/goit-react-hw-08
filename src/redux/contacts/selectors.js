import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const getContacts = state => state.contacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (contacts.length === 0) return [];
    return contacts.filter(({ name, number }) => {
      const filtredByName = name
        .toLowerCase()
        .includes(filter.toLowerCase().trim());
      const filtredByNum = number.includes(filter.trim());
      return filtredByName || filtredByNum;
    });
  }
);
