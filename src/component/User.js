const User = ({ data, setData, error }) => {
  let { name, age, email } = data;
  const handleClick = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  }; 
  return (
    <>
      <div className="form-container">
        <div>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => handleClick(e, "name")}
          />
          {error?.name && <span>{error.name}</span>}
        </div>
        <div>
          <label htmlFor="">age :</label>
          <input
            type="number"
            placeholder="age"
            value={age}
            onChange={(e) => handleClick(e, "age")}
          />
          {error?.age && <span>{error.age}</span>}
        </div>
        <div>
          <label htmlFor="">email :</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => handleClick(e, "email")}
          />
          {error?.email && <span>{error.email}</span>}
        </div>
      </div>
    </>
  );
};

export default User;
