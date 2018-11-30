import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check from '../rules/check'
import Button from '../components/Button'
import Coins from './Coins'
import Player from './Player'

const Game = ({ playersKeys, showFinishButton, win, resetGame }) => {
  const handleClick = () => {
    win()
    resetGame()
  }

  return (
    <main style={style}>
      <Player playerKey="dealer" />

      <div style={playersKeys.length > 1 ? style.players : {}}>
        {playersKeys.map(key => (
          <Player playerKey={key} key={key} />
        ))}
      </div>

      {showFinishButton && (
        <Button color="navy" onClick={handleClick}>
          ✔︎
        </Button>
      )}

      <Coins />
    </main>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '100%',
  maxHeight: 800,
  maxWidth: 540,

  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 15,
  lineHeight: 1.6,
  textAlign: 'center',

  players: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    alignSelf: 'stretch'
  }
}

export default connect(
  ({ players, game }) => ({
    showFinishButton:
      game.status === 'playing' && check.hasGameFinished(players),
    playersKeys: [
      players['replica'].hand.length && 'replica',
      'primary'
    ].filter(Boolean)
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Game)
