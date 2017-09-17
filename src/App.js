import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Panel, Button, Row, Col} from 'react-bootstrap';
const quotes = [
  {
    "quote":"Begin with the end in mind.",
    "author":"Lana Rigsby"
  },
  {
    "quote":"Minimalism is not a lack of something. It’s simply the perfect amount of something.",
    "author":"Nicholas Burroughs"
  },
  {
    "quote":"Whoever best describes the problem, is the one most likely to solve it. ",
    "author":"Dan Roam"
  },
  {
    "quote":"No great thing is created suddenly.",
    "author":"Epictetus"
  },
  {
    "quote":"We should pursue and practice moderation. ",
    "author":"Plato"
  },
  {
    "quote":"Remember it takes a lot of shit, to create a beautiful flower.",
    "author":"Jacob Cass"
  },
  {
    "quote":"Nobody ever get fired for running an A/B test.",
    "author":"Chad Mazzola"
  },
  {
    "quote":"Every great design begins with an even better story.",
    "author":"Lorinda Mamo"
  },
  {
    "quote":"Well established hierarchies are not easily uprooted",
    "author":"Tao Te Ching"
  },
  {
    "quote":"To some degree, to be creative you have to be selfish.",
    "author":"Meredith Norwood"
  },
  {
    "quote":"Designing with watermarked photos is like baking with fake sugar.",
    "author":"Justin Giovanetti"
  }

]

class App extends Component {
  constructor(){
    super()
    this.state = {
      "quote":"Hello world!",
      "author":"Harsh Makadia",
      "tweetUrl" : "https://twitter.com/intent/tweet?text=Hello%20world"
    }
    this.generateNewQuote = this.generateNewQuote.bind(this);
    this.getNewBrainyQuote = this.getNewBrainyQuote.bind(this);
  }

  getNewBrainyQuote(){
    //get random number from 1-10 
    let number = Math.floor(Math.random() * 10) + 1;
    let quoteObj = quotes[number];
    console.log("QuoteObj ", quoteObj);
    //set state quote state
    let quote = quoteObj.quote;
    let author = quoteObj.author;
    let finalTweet = quote + "-" + author;
    let text = encodeURIComponent(finalTweet.trim())
    let url = "https://twitter.com/intent/tweet?text=" + text;
    
    this.setState({
      "quote":quote,
      "author":author,
      "tweetUrl":url
    });
    console.log(finalTweet);
    console.log(url);
  }

  generateNewQuote(){
    this.getNewBrainyQuote();
  }
  render() {
    return (
      <div className="App">
        <div className="App-intro">
        <Panel header="Random Quote!" bsStyle="primary">
          <div className="quoteBox">

            <div className="quoteBody">
              {this.state.quote}
            </div> 

            <div className="authorBody">
              - {this.state.author}
            </div>

          </div>
          <br />
          <Row>
            <Col xs={6} md={6} sm={6} lg={6}>
              <Button 
                bsStyle="primary" className="newquotes" onClick={this.generateNewQuote}>New Quote
              </Button>
            </Col>
            <Col xs={6} md={6} sm={6} lg={6}>
              <a className="twitter-share-button"
                href={this.state.tweetUrl}>
                Tweet Now
              </a>
            </Col>
          </Row>

        </Panel>
        </div>
      </div>
    );
  }
}

export default App;


