import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';

const { Header, Footer, Content } = Layout;

function App(props) {
  return (
    <Layout style={{ height: `100vh` }}>
      <Header style={{ backgroundColor: `#fafafa` }}>header</Header>
      <Layout>
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work" exact component={Work()} />
            <Route path="/contact" exact component={Contact()} />
            <Route path="/about" component={About} />
          </Switch>
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default App;
