export default ({ data: { name, email, gender, contact_number } }) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Email: {email}</p>
      <p>Contact: {contact_number}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};
