import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { Card } from "./components/Card";

function App() {
  return (
    <AppContainer>
      <Column text="Todo">
        <Card text="Learn Typescript"/>
      </Column>
      <Column text="IN Progress">
        <Card text="Learn JS"/>
      </Column>
      <Column text="Done">
        <Card text="Learn HTML"/>
      </Column>
    </AppContainer>
  );
}

export default App;
