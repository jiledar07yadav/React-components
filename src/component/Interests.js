const Interests = ({ data, setData, error }) => {
  const { interests } = data;
  const handleDataChange = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setData((prevData) => ({
        ...prevData,
        interests: [...prevData.interests, value],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        interests: prevData.interests.filter((i) => i !== value),
      }));
    }
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          value="coding"
          checked={interests.includes("coding")}
          onChange={handleDataChange}
        />
        <label htmlFor="">Coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Music"
          checked={interests.includes("Music")}
          onChange={handleDataChange}
        />
        <label htmlFor="">Music</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="cricket"
          checked={interests.includes("cricket")}
          onChange={handleDataChange}
        />
        <label htmlFor="">cricket</label>
      </div>
      {error.interests && <span>{error.interests}</span>}
    </div>
  );
};
export default Interests;
