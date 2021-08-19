import React, { Component } from 'react';
import './App.css';
import styles from './design/curve.module.css';


class Curve extends Component {
  render() {
    return (
      <div>
        <span className={styles.curve}></span>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.titleLocation}>연간계획</h1>
      </div>
    );
  }
}

class Spring extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.springLocation}>봄</h1>
      </div>
    );
  }
}

class Summer extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.summerLocation}>여름</h1>
      </div>
    );
  }
}

class Autumn extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.autumnLocation}>가을</h1>
      </div>
    );
  }
}

class Winter extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.winterLocation}>겨울</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Curve></Curve>
        <Title></Title>
        <Spring></Spring>
        <Summer></Summer>
        <Autumn></Autumn>
        <Winter></Winter>
      </div>
      );
  }
}

export default App;
