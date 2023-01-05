import React from "react";
import NavBar from "./NavBar";

const About = () => {
    return ( 
        <>
        <NavBar/>
        <div className="About"
         style={{
            position: 'absolute',
            top: '45%',
            left: '45%',
            width: '450px',
            height: '450px',
            marginTop: '-100px',
            marginLeft: '-100px',
            border: '2px solid white',
            textAlign: 'center',
            fontStyle: 'bold',
            fontColor: 'white'
          }}>
        <h1> Hello friends! </h1> <br/>
        <h3>Welcome to Codegames</h3><br/>
        <p style={{display: 'justify'}}> Were here to help you become a better programer,
            and today we will test your knowledge of react.js! 
        </p> <br/>
        <p style={{display: 'justify'}}> To play the game simply answer the questions to move forward with our questionaire,
            you'll have a couple of seconds to move on to answer correctly before your timer is up and you have to move on to the next question!</p>    
            <p style={{display: 'justify'}}> now that youve entered your name, your score will be displayed when the game is over,
                 and you can compare your score with anyone you share this with</p> 
                 <br/> 

            <p style={{display: 'inline'}}> Happy coding!
                -Team Codegames </p>
        </div>
        </>
     );
}
 
export default About;