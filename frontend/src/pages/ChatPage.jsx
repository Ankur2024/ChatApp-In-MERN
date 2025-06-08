import React from 'react'
import { useParams } from 'react-router'

function ChatPage() {
  const {id} = useParams();
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage