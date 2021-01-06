import React from 'react';
import { Games } from './games';

export class TopGames extends React.Component{

    state = {

        gamesarray:[ ]
    }
    
    
    render(){
        return(
            <div>
                <h1>These Are The Top Games</h1>
                <Games ConsoleAndConputerGames = {this.state.gamesarray}></Games>
            </div>
        );
    }

}