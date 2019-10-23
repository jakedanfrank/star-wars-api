import React from 'react';
import { Container, Header, } from "semantic-ui-react";
import axios from "axios";
// import Character from "./components/Character";
// import './App.css';

class App extends React.Component {
  state = { characters: [], }

  componentDidMount() {
    axios.get("https://swapi.co/api/people")
      .then((response) => {
        console.log(response.data.results)
        this.setState( { characters: response.data.result });
      })
      .catch( error => {
        console.log(error)
      })
  };

renderCharacters = () => {
  const {characters} = this.state;
    if (this.renderCharacters.length <=0)
    return <h3>The Characters Have Left The Web Galaxy
                ...Check Back In 2 Light Years...
          </h3>
    return characters.map(char => {
      return <Container>
          <Header as="h3">{char.name}</Header>
      </Container>
      // <Character key={char.url} {...character} />
    })
}

render() {
  return(
      <>
        <div>
          <Container fluid style={{background: "black"}}>
            <Header 
              as="h1" 
              color="yellow" 
              textAlign="center"
              style={{ paddingTop: "50px" }}
            >
              Star Wars Fan Club
            </Header>
            <Header 
              as="h3" 
              color="yellow" 
              textAlign="center"
              style={{ paddingBottom: "50px" }}
            >
              Your Favorite Star Wars App...
            </Header>
          </Container>
        </div>
        <div>
          <Container>
            {this.renderCharacters()}
          </Container>
        </div>
      </>
    )
  };
};
export default App;
