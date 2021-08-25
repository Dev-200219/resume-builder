import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import {useEffect} from "react"
import {auth, firestore} from "./firebase.js"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./Redux/Actions/userActions";

let App = () => {

  let state = useSelector(state=>state);
  let dispatch = useDispatch();

  useEffect(()=>{

    let unsub = auth.onAuthStateChanged(async (user)=>{
      dispatch(addUser(user));
      if(user)
      {
        let {uid, email} = user;
        let docRef = firestore.collection("user").doc(uid);
        let doc = await docRef.get();

        if(!doc.exists)
        {
          docRef.set({
            email
          })
        }
      }

    })

    return ()=>{
      unsub();
    }

  },[])

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
