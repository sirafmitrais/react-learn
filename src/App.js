import './App.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Header from './Header';

import Post from './Post';
import Note from './Notes';
// import Form from './Forms';


function App() {

  return (
    <React.Fragment>
      <Header title="Mitrais"></Header>
      <br />
      <br /><br />
      <table style={{ width: "100%" }}>
        <tbody>
          {/* <TableHeader></TableHeader> */}
          <tr>
            <th>
              <h1>Post</h1>
            </th>
            <th>
              <h1>Notes</h1>
            </th>
          </tr>
          <tr>
            <td>
              <Post></Post>
              {/* <Form></Form> */}
            </td>
            <td>
              <Note></Note>
            </td>
          </tr>
        </tbody>
      </table>
      <h1>Test</h1>
      <Button variant="primary">
        Helllo
      </Button>
    </React.Fragment>
  );
}

export default App;
