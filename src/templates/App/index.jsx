import PeopleList from "../../components/PeopleList";
import PeopleProvider from "../../context/PeopleProvider";
import "./styles.css";

function App() {
  return (
    <>
      <PeopleProvider>
        <PeopleList />
      </PeopleProvider>
    </>
  );
}

export default App;
