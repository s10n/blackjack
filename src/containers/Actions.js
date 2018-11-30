import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import check from '../rules/check'
import Button from '../components/Button'
import { MIN } from '../constants'

const Actions = ({ players, game, playerKey, stake, ...action }) => {
  const bet = () => action.bet(playerKey, MIN)
  const bet10 = () => action.bet(playerKey, 10)
  const minus = () => action.bet(playerKey, -1 * MIN)
  const startGame = () => action.startGame()

  const draw = () => action.draw(playerKey)
  const stay = () => action.set(playerKey, 'stay')
  const double = () => action.double(playerKey)
  const surrender = () => action.set(playerKey, 'surrender')
  const split = () => action.split()

  const { canBet, canBet10, canMinus, canPlay } = action
  const { canDraw, canDouble, canSurrender, canSplit } = action
  const actions =
    {
      idle: [
        { color: 'green', children: '++', disabled: !canBet10, onClick: bet10 },
        { color: 'green', children: '+', disabled: !canBet, onClick: bet },
        { color: 'brown', children: '-', disabled: !canMinus, onClick: minus },
        { color: 'navy', children: '→', disabled: !canPlay, onClick: startGame }
      ],
      playing: [
        { color: 'green', children: 'H', disabled: !canDraw, onClick: draw },
        { color: 'brown', children: 'S', disabled: !canDraw, onClick: stay },
        canDouble && { color: 'navy', children: 'D', onClick: double },
        canSplit && { color: 'olive', children: 'SP', onClick: split },
        canSurrender && { color: 'teal', children: 'SU', onClick: surrender }
      ].filter(Boolean)
    }[game.status] || []

  return (
    <section>
      {actions.map((action, index) => (
        <Button {...action} key={index} />
      ))}
    </section>
  )
}

export default connect(
  ({ players, game, coins }, { playerKey }) => {
    const player = players[playerKey]
    const canReplicaAction =
      playerKey !== 'replica' || !!players['primary'].status

    return {
      players,
      game,
      stake: player.stake,
      canBet: coins >= MIN,
      canBet10: coins >= 10,
      canMinus: player.stake > MIN,
      canPlay: !!player.stake,
      canDraw: canReplicaAction && check.canPlayerDraw(player),
      canDouble: canReplicaAction && check.canPlayerDouble({ player, coins }),
      canSplit: canReplicaAction && check.canSplit({ players, coins }),
      canSurrender:
        canReplicaAction &&
        !players['replica'].hand.length &&
        check.canPlayerSurrender(player)
    }
  },
  dispatch => bindActionCreators(actions, dispatch)
)(Actions)