const React = require('react');



function Ran () {
    var Ra = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    console.log(Ra);
return(Ra)
}
const Qt= [
            '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.” —Norman Vincent Peale',
            '“If you can dream it, you can do it.” —Walt Disney',
            '“Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open.” —Pauline Kael\n',
            '“Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.” —George Herbert',
            '“Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.” —George Whitefield'

        ];

class Randomizer extends React.Component {
    constructor(props){
        super(props);
        this.state = {answer :''};
        // this.state = {inputValue: ''};

        this.handleClick = this.handleClick.bind(this);


    }



    handleClick(){


        this.setState(function(){
            console.log(this.state.answer);
            return{
                 answer: Math.round(Math.random())



            }

            }
            // this.setState(function (e){
            //     e.preventDefault();
            //     return{
            //         inputValue: e.target.value
            //
            //     }
            //
            // }

            )


    // )

    };

    render(){
        return(

            <div className = 'randiv' value={this.state.answer}>
                <input className="maininput" style = {this.state.answer === 1 ? {background:'#32CD32' } : {background: '#FA8072'}} />
                <button className='yesorno' onClick={this.handleClick}
                        style = { this.state.answer === 1 ? {background:'#32CD32' } : {background: '#FA8072'} } >
                    { this.state.answer === 1 ? "Yes" : "No"}</button>
                <div className="Qt">
                    { this.state.answer === 1 ? Qt[Ran()] : null}
                </div>


            </div>






        )

    }
}
   module.exports = Randomizer;
