
import Picker from '@emoji-mart/react'
import { useState } from 'react';
import data from '@emoji-mart/data'


const EmojiTextarea = () => {
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  const insertEmoji = (emoji) => {
    setText(text + emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextareaChange}
        placeholder="Type your message..."
      />
      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
        {showEmojiPicker ? 'Close Emoji Picker' : 'Open Emoji Picker'}
      </button>
      {showEmojiPicker && (
        <div className="emoji-picker">
          <Picker data={data} onClick={(emoji) => insertEmoji(emoji)} />
        </div>
      )}
    </div>
  );
};

export default EmojiTextarea;
