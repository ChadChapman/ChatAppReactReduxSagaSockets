import { connect } from 'react-redux'
import MessagesListComponent from '../components/MesagesList'

export const MessagesList = connect(state => ({
    messages: state.messages
}), {})(MessagesListComponent);