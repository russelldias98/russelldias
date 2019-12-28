import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App(props) {
  return (
    <Layout style={{ height: `100vh` }}>
      <Header style={{ backgroundColor: `#fafafa` }}>header</Header>
      <Layout>
        <Content>
          <Switch>
            <Route path="/" exact render={() => <div>home</div>} />
            <Route path="/work" exact render={() => <div>work</div>} />
            <Route path="/contact" exact render={() => <div>contact</div>} />
            <Route path="/about" exact render={() => <div>about</div>} />
          </Switch>
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default App;
