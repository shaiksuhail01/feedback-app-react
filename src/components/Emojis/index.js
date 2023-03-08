import './index.css'

const Emojis = props => {
  const {emojiDetails, onClickEmoji} = props
  const {name, imageUrl} = emojiDetails
  const onClickEmojiImage = () => {
    onClickEmoji()
  }
  return (
    <li className="listItemContainer">
      <img
        src={imageUrl}
        alt={name}
        className="image"
        onClick={onClickEmojiImage}
      />
      <p className="emojiName">{name}</p>
    </li>
  )
}

export default Emojis
