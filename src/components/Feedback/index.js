import {Component} from 'react'

import Emojis from '../Emojis'

import './index.css'

class Feedback extends Component {
  state = {
    questionDisplay: 'displayQuestion',
    thankyoumsgDisplay: 'displayThankyou',
  }

  onClickEmoji = () => {
    this.setState({
      questionDisplay: 'displayQuestionNone',
      thankyoumsgDisplay: 'displayThankyouBlock',
    })
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {questionDisplay, thankyoumsgDisplay} = this.state
    return (
      <div className="divContainer">
        <div className={questionDisplay}>
          <div className="container">
            <h1 className="question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="listContainer">
              {emojis.map(eachEmoji => (
                <Emojis
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className={thankyoumsgDisplay}>
          <div className="container">
            <img src={loveEmojiUrl} alt="love emoji" className="loveImage" />
            <h1 className="thankyou">Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Feedback
