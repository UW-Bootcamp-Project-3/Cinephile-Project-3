
import React, { useRef, useState } from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Banner from "../src/images/Banner.gif";
import Movies from "../src/components/Movies";
import Profile from "../src/components/Profile";
import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import NavigationWithAuth from "./components/NavigationWithAuth";
import Events from "./components/Events/Events";
// import { AppContext } from "./libs/contextLib";

firebase.initializeApp({
  // config
  apiKey: "AIzaSyBnyW9BhLpp1SWPvmrg63a-aHdbCSBJ3O4",
  authDomain: "cinephile-92f7d.firebaseapp.com",
  projectId: "cinephile-92f7d",
  storageBucket: "cinephile-92f7d.appspot.com",
  messagingSenderId: "287886091378",
  appId: "1:287886091378:web:236da01239712f9ac88eeb",
  measurementId: "G-QD8JCJ0WET",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {
  const [user] = useAuthState(auth);
  const loggedIn = sessionStorage.getItem("loggedIn");
  if(loggedIn){
  return (
    <div>  
      <img src= {Banner} alt="Banner" className="Banner"/>
    <Router>
      <div>
        <NavigationWithAuth />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/events" component={Events} />
        <ParticleBackground />
        </div>
      </Router>
      <div className="App">
        <header>
          <h1>⚛️🔥💬</h1>
          <SignOut />
        </header>

        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </div>
    </div>
  )} return(
    <div>  
    <img src= {Banner} alt="Banner" className="Banner"/>
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/events" component={Events} />
      <ParticleBackground />
      </div>
    </Router>
  </div>
  )
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

//build chatroom
function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img alt=""

          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}
export default App;
