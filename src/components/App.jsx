import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store';
export default function App() {
 


  return (
    <>    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </PersistGate>
    </Provider>
    </>

  )
}