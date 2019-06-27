import React from 'react';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl'
import Main from './components/main';
import './App.css';

function App() {
  return (

    <div className="demo-big-content">
      <Layout>
        <Header className="ui-gradient-atlas" title="Aditya Nawandar" scroll>
          <Navigation>
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/aboutme">About Me</a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/aboutme">About Me</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>

  );
}

export default App;
