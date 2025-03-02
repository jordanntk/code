import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quiz/:quizType" component={Quiz} />
          <Route path="/result/:quizType/:total" component={Result} />
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;