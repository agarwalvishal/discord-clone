import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import './ChatHeader.css'


function ChatHeader({ channelName }) {
  return (
    <div className='chatHeader'>
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          { channelName }
        </h3>
      </div>

      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>

    </div>
  )
}

export default ChatHeader
