import User from "./User";
import Interests from "./Interests";
import Setting from "./Setting";
import { useState } from "react";
const Form = () => { 
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "dark",
  });
  const [error, setError] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [submit, setSubmit] = useState([]);
  const handlePrevbtn = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleNextbtn = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handleSubmit = () => {
    setSubmit((prev) => [...prev, data]);
    console.log(data);
    setData({
      name: "",
      age: "",
      email: "",
      interests: [],
      theme: "dark",
    });
    setActiveTab(0);
  };
  const tabs = [
    {
      name: "User",
      component: User,

      validate: () => {
        const err = {};
        if (!data.name || data.name.trim().length < 2) {
          err.name = "name is not valid";
        }
        if (!data.age || Number(data.age) < 18) {
          err.age = "age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "email is not valid";
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,

      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "select atleast one";
        }
        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <>
      <div className="tab-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className={activeTab === index ? "Tab active" : "tab"}
            onClick={() => {
              if (tabs[activeTab].validate()) {
                setActiveTab(index);
              }
            }}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="Tab-body">
        <ActiveTabComponent
          data={data}
          setData={setData}
          error={error}
          setError={setError}
        />
      </div>
      <div>
        {activeTab !== 0 && <button onClick={handlePrevbtn}>Prev</button>}

        {activeTab !== tabs.length - 1 && (
          <button onClick={handleNextbtn}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
      <div>
        {submit.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Interests</th>
                <th>Theme</th>
              </tr>
            </thead>
            <tbody>
              {submit.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.interests}</td>
                  <td>{item.theme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Form;
