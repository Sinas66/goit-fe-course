import React, { Component } from "react";
import Header from "./Header/header";
import Counter from "./Counter/Counter.js";
import Form from "./Form/Form";
import UserCard from "./UserCard/UserCard";
import Stats from "./Stats/Stats";
import PricingPlan from "./PricingPlan/PricingPlan";
import pricingData from "./PricingPlan/PricingPlan.json";

// console.log('pricingPlanItems', pricingPlanItems);
// const pricingData = JSON.parse(pricingPlanItems);

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};


const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      logoTitle: `ReactApp`,
      count: 0,
      users: []
    };
  }

  onIncrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  onDecrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  onSubmit = data => {
    const { users } = this.state;
    const newUsers = [...users];
    const userData = data;
    userData.id = new Date().getTime()
    newUsers.push(data);

    this.setState({
      users: newUsers
    });
    console.log(`submData`, users);
  };

  render() {
    const { logoTitle, count, users } = this.state;
    return (
      <>
        <Header headerTitle={logoTitle} logged />
        <Counter
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
          count={count}
        />

        <Form onSubmit={this.onSubmit} />
        <ul>
          {users.length > 0 && users.map(user => <UserCard key={user.id} {...user} />)}
        </ul>
        <UserCard {...user}></UserCard>

        <Stats stats={stats} title="Upload stats" />

        <PricingPlan items={pricingData}  />
        <div>my App</div>
      </>
    );
  }
}

export default App;
