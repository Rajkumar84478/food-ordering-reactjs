import React from 'react'
import UserClass from './UserClass'


class About extends React.Component{

    render(): React.ReactNode {
        return (
            <>
            <h2>About us</h2>
            <div>This is the food ordering website</div>
            <UserClass/>
            </>
          )  
    }
}

export default About