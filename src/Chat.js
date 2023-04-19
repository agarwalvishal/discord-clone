import React, { useEffect, useState } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName} from './features/appSlice';
import './Chat.css'
import ChatHeader from './ChatHeader';
import Message from './Message';
import db from './firebase';


function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
      })
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user
    });

    setInput('');
  };

  const createPlaceholder = () => {
    if (channelId) return `Message #${channelName}`
    else return ''
  }

  return (
    <div className="chat">
      <ChatHeader channelName = {channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp = { message.timestamp }
            message = { message.message }
            user = { message.user }
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleRoundedIcon fontSize='large'/>
        <form>
          <input 
            value={input}
            disabled={!channelId}
            onChange={e => setInput(e.target.value)}
            placeholder={createPlaceholder()}
          />
          <button 
            disabled={!channelId}
            className='chat__inputButton'
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large"/>
          <GifIcon fontSize="large"/>
          <EmojiEmotionsIcon fontSize="large"/>
        </div>
      </div>

    </div>
  )
}

export default Chat
