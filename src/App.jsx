import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { css, Global } from '@emotion/core';

function App(props) {
  return (
    <Router>
      <Global
        styles={css`
          * {
            margin: 0;
            box-sizing: border-box;
            behavior: smooth;
          }

          html {
            font-family: 'Open Sans', sans-serif;
          }

          #root {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      />
      <Switch>
        <Route path="/" exact component={() => <div>Home</div>} />
      </Switch>
    </Router>
  );
}

export default App;
