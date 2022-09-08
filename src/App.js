import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
import TableRow from "./components/TableRow";

function App() {
  // state original : Is it SLICE OR SPLICE??
  const fiveContacts = contacts.slice(0, 5);

  const buttonGetRandom = () => {
    // get a random one .. but how... ?
    // let i = Math.floor(Math.random() * (contacts.length + 1));
    //need to return something using state ? yes i know but how ? I need to =>
  };

  // const buttonHandlerGetRandom = () => {
  //   let index = Math.floor(Math.random() * (contacts.length + 1));
  //   setStateApp((prevState) => {
  //     return [...prevState, contacts[index]];
  //   });
  // };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button>hey</button>
      <button>hey second</button>
      <button>hey third</button>
      <table>
        <thead>
          <tr>
            <td> PICTURE </td>
            <td> NAME </td>
            <td> POPULARITY </td>
            <td> Won an Oscar </td>
            <td> Won an Emy</td>
            {/* <td> </td> */}
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((e) => {
            return <TableRow person={e} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
