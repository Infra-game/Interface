/*import Chart from "../../component/chart/Chart"
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo"
import "./Login.css"
import { userData } from "../../dummyData"
import WidgetSm from "../../component/widgetSm/widgetSm"
import WidgetLg from "../../component/widgetLg/widgetLg"



export default function Login(){
    return(
        <div className="Login">
            
        </div>
    )
}*/
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }

import React from "react";
import Navbar from "D:/projetYnov/Interface/src/component/Login/NavBar.jsx";
import "./Login.css";

class App extends React.Component {
  state = {
    // header,

    // main
    main_title: "Connexion à InfraGame",
    main_info: "Entrez vos informations de connexion"
  };

  render() {
    const state = this.state;
    return (
      <div className="container mt-5">
        <Navbar
          header_h2__bold={state.header_h2__bold}
          header_title={state.header_title}
          header_info={state.header_info}
          main_title={state.main_title}
          main_info={state.main_info}
        />
      </div>
    );
  }
}

export default App;
