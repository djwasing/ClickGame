import React from "react";
import Header from "./Header";
import Card from "./Card";
import "./images/style.css";

const images = [
    {
        id: 1,
        path: require('./images/RnineT.jpg')
    },
    {
        id: 2,
        path: require('./images/tracer.jpg')
    },
    {
        id: 3,
        path: require('./images/xsr900.jpg')
    },
    {
        id: 4,
        path: require('./images/Panigale.jpg')
    },
    {
        id: 5,
        path: require('./images/AtlasRanger.jpg')
    },
    {
        id: 6,
        path: require('./images/tiger800.jpg')
    },
    {
        id: 7, 
        path: require('./images/versys1000.jpg')
    },
    {
        id: 8,
        path: require('./images/streetBob.jpg')
    },
    {
        id: 9,
        path: require('./images/monkey.jpg')
    },
    {
        id: 10,
        path: require('./images/mt10.jpg')
    },
    {
        id: 11,
        path: require('./images/desertSled.jpg')
    },
    {
        id: 12,
        path: require('./images/roadster.jpg')
    }
]

class Game extends React.Component {

    state = {
        score: 0,
        topScore: 0,
        maxScore: 12,
        clicked: [],
        images: images,
        info: ""
    }

    imageClick = id => {
        //console.log(id)
        let clickedImages = this.state.clicked;
        let checker = clickedImages.includes(id);

        // --- handle score and pushing to clicked arr ---
        if (clickedImages.indexOf(id) === -1) {
            clickedImages.push(id)
            this.setState({clicked: clickedImages, score: this.state.score+1, info: "Right! Keep guessing!", images: this.shuffleImages(images)})
        }else{
            // --- reset the score, empty the clicked arr, give message to user ---
            this.setState({score: 0, clicked: [], info: "You guessed wrong! Try again!"})
        }

        //--- handle the top score ---
        if (this.state.score+1 > this.state.topScore && checker === false) {
            this.setState({topScore: this.state.topScore+1})
            
            // --- handle max score and winning game ---
            if (this.state.topScore+1 === this.state.maxScore) {
                console.log("equal");
                this.setState({info: "You Win!", score: 0, topScore: 0, clicked: []})
            }
        }
    };
    // --- func to shuffle the images arr and send it back
    shuffleImages = (arr) => {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr
    }

    render() {
        return (
            <div>
                <Header 
                    x={this.state.score} 
                    y={this.state.topScore}
                    message={this.state.info}
                />
                <div className="cardArea">
                    {
                        this.state.images.map(element => {
                            return (
                                <Card
                                    key={element.id}
                                    imgSrc={element.path}
                                    clickedImg={() => this.imageClick(element.id)}
                                />
                            )
                        })
                    }
                </div>
                
            </div>

    
        )
    }

}

export default Game;