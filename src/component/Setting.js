const Setting = ({ data, setData }) => {
  const { theme } = data;
  const handleDataChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleDataChange}
        />
        <label htmlFor="">Dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={handleDataChange}
        />
        <label htmlFor="">Light</label>
      </div>
    </div>
  );
};
export default Setting;
