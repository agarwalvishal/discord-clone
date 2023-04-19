import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Sidebar from  './Sidebar';
import Chat from './Chat';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(`user is ${JSON.stringify(authUser, null, 2)}`);
      console.log('user is', authUser);
      if (authUser) {
        // The user is logged in
        console.log('if authUser');
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            name: authUser.displayName
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    // BEM naming convention
    <div className="app">
      { user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
