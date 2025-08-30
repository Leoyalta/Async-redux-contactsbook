import css from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/operations.js";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import Loader from "../Loader/Loader.jsx";
import { selectError, selectIsLoading } from "../../redux/contactsSlice.js";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.wrapperApp}>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader>Request in progress...</Loader>}
      {error && <p>Oops, something went wrong, please reload the page.</p>}
      {!isLoading && !error && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;
