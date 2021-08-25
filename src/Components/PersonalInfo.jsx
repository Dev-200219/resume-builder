import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../Redux/Actions/userInfoAction";
import "./CSS/PersonalInfo.css";
import Preview from "./Preview";

let PersonalInfo = () => {
  let dispatch = useDispatch();
  let details = useSelector((state) => state.details);
  console.log(details);
  return (
    <>
      <div className="personal-container">
        <h1 className="m-4">Personal Details</h1>
        <div className="personal-form m-4">
          <div className="row g-3">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e)=>{
                    dispatch(userInfo({fname:e.currentTarget.value}));
                }}
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e)=>{
                    dispatch(userInfo({lname:e.currentTarget.value}));
                }}
              />
            </div>
            <div className="col-sm-5">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e)=>{
                    dispatch(userInfo({email:e.currentTarget.value}));
                }}
              />
            </div>
            <div className="col-sm-5">
              <input onChange={(e)=>{
                    dispatch(userInfo({phone:e.currentTarget.value}));
                }} type="tel" className="form-control" placeholder="Phone" />
            </div>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                onChange={(e)=>{
                    dispatch(userInfo({city:e.currentTarget.value}));
                }}
              />
            </div>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                onChange={(e)=>{
                    dispatch(userInfo({state:e.currentTarget.value}));
                }}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary m-4">Next</button>
      </div>
      <Preview />
    </>
  );
};

export default PersonalInfo;
