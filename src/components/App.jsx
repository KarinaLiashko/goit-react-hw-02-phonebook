import React from 'react';

import { Container,  PhonebookTitle, ContactsTitle, Subtitle} from './App.styled';
import { InputSection } from './InputSection/InputSection';
import { ContactsList } from './ContactsList/ContactsList';





  // handleInputChange = event => {
  //   // console.log(event.currentTarget.value);

  //   this.setState({contacts: event.currentTarget.value});
  // }
  
export const App = () => {
    
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

    return (
      <>
          <Container>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <InputSection> </InputSection>

            <ContactsTitle>Contacts</ContactsTitle>
          <Subtitle>Find contacts by name</Subtitle>
          
              <ContactsList>Contacts</ContactsList>
          </Container>
      </>
    );
};
