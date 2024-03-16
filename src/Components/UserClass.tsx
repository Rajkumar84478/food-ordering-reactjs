import { argv } from 'process';
import React, { Component } from 'react'

type State={
    userInfo:{login:string;
        location:string;
        avatar_url:string;
    };
}

export default class UserClass extends Component<any,State> {
    constructor(props)
    {
        super(props);
        this.state={
            userInfo:{
                login:"Dummy Name",
                location:"Dummy location",
                avatar_url:"http//dummy",
            },
        };
        console.log("first");
    }

    async componentDidMount(){
        const responseData=await fetch("https://api.github.com/users/rajkumar84478");
        const jsonData=await responseData.json();
        console.log(jsonData);

        this.setState({
            userInfo:jsonData,
        })
    }

  render() {
    const{login,location,avatar_url}=this.state.userInfo;
    return (

      <div className='user-card'>
        <img src={avatar_url} alt="user_pic" />
        <h2> Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:</h4>
      </div>
    )
  }
}
