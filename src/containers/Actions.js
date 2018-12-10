import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UNIT, MAX } from '../rules/constants'
import p from '../rules/player'
import * as actions from '../actions/player'
import * as tripActions from '../actions/trip'
import selectStrategy from '../selectors/strategy'
import ActionGroup from '../components/ActionGroup'

export default connect(
  state => state,
  dispatch => bindActionCreators({ ...actions, ...tripActions }, dispatch),
  (
    { player, dealer, bank, turn, history },
    { enter, bet, hit, stay, double, split, surrender }
  ) => {
    const actions = { SU: surrender, SP: split, D: double, S: stay, H: hit }
    const strategy = selectStrategy({ player, dealer, bank, turn })

    return {
      actions: Number.isInteger(turn)
        ? Object.entries(actions).map(([key, onClick]) => ({
            children: key,
            disabled: !(player[turn] && p({ player, bank, turn }).can[key]),
            border: strategy === key,
            onClick
          }))
        : bank + player[0].bets || history.games.length
        ? [1, 2, 5, 10, 20].map(n => ({
            children: n * UNIT,
            disabled: bank < n || player[0].bets + n > MAX,
            onClick: () => bet(n)
          }))
        : [100, 200, 500, 1000, 2000].map(n => ({
            children: n * UNIT,
            onClick: () => enter(n)
          }))
    }
  }
)(ActionGroup)
