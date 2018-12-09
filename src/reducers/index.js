import { combineReducers } from 'redux'
import bank from './bank'
import deck from './deck'
import dealer from './dealer'
import player from './player'
import turn from './turn'
import history from './history'
import v from './v'

export default combineReducers({ bank, deck, dealer, player, turn, history, v })