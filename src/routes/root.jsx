import { useState } from 'react'
import '../root.css'
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
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

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
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