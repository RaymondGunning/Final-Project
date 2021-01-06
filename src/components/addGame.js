import React from 'react';
import axios from 'axios';

export class AddGame extends React.Component{

    onSubmit(e) {
        e.preventDefault();
        console.log(`button clicked
        ${this.state.Name},
        ${this.state.Released},
        ${this.state.Platform},
        ${this.state.Background_Image}`);
        this.setState({
        Name: '',
        Released: '',
        Platform: '',
        Background_Image: ''
        })
        const newMovie = {
        Name: this.state.Name,
        Released: this.state.Released,
        Platform: this.state.Platform,
        Background_Image: this.state.Background_Image
        };
        axios.post('http://localhost:4000/addgame', AddGame)
        .then(res => console.log(res.data));
        }
        

    render(){
        return(
            <div>
                <h1>This is The Wish List</h1>
            </div>
        );
    }

}