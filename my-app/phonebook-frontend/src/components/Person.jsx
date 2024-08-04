const Person = ({ person, handleDelete }) => {
  return (
    <li>
      <span>{person.name}</span> <span>{person.number}</span>{' '}
      <button onClick={() => handleDelete(person.id)}>delete</button>
    </li>
  );
};

export default Person;
