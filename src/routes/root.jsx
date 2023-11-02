import { useState } from 'react'
import '../root.css'
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <a href={`/Profile`}>Profile</a>
            </li>
            <li>
              <a href={`/Chat`}>Chat</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

// export default function Root() {

//   return (
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//           <li>
//             <Link to="/chat">Chat</Link>
//           </li>
//         </ul>


//         <hr />

//         <Switch>
//           <Route path="/home">
//             <App />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/profile">
//             <Profile />
//           </Route>
//           <Route path="/chat">
//             <Chat />
//           </Route>
//         </Switch>
//       </div>
//   );
// }



function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function Chat() {
  return (
    <div>
      <h2>Chat</h2>
    </div>
  );
}