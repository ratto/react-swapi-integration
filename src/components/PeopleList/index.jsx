import { useContext, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import "./styles.css";
import PeopleContext from "../../context/PeopleProvider/context";
import { loadPeople } from "../../context/PeopleProvider/action";

const PeopleList = () => {
  const peopleContext = useContext(PeopleContext);
  const { peopleState, peopleDispatch } = peopleContext;

  useEffect(() => {
    loadPeople(peopleDispatch);
  }, [peopleDispatch]);

  return (
    <>
      {!peopleState.people.length && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {peopleState.people.map((person, index) => (
        <Card key={index}>
          <Card.Title>{person.name}</Card.Title>
          <Card.Body>
            <p>Height: {person.height}</p>
            <p>Eye color: {person.eye_color}</p>
            <p>Hair color: {person.hair_color}</p>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default PeopleList;
