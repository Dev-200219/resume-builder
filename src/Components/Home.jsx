import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { templateCreator } from "../Redux/Actions/templateActions";
import "./CSS/Home.css";

let Home = () => {
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let historyObj = useHistory();
  return (
    <>
      {user ? "" : <Redirect to="/login" />}
      <button
        className="logout-btn btn btn-primary"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
      <div className="template-container">
        <div
          onClick={() => {
            dispatch(templateCreator("A"));
            historyObj.push("/personalInfo");
          }}
          className="template"
        >
          <img src="http://localhost:3000/t1.svg" alt="template-1" />
        </div>
        <div
          onClick={() => {
            dispatch(templateCreator("B"));
            historyObj.push("/personalInfo");
          }}
          className="template"
        >
          <img src="http://localhost:3000/t2.svg" alt="template-2" />
        </div>
      </div>
    </>
  );
};

export default Home;
