import React from 'react';


export class Games extends React.Component{


    render(){

        return(
            <div>
                <h1>These Are The Games</h1>
                {console.log(this.props.gamesarray)}
            </div>
        );
    }

}

