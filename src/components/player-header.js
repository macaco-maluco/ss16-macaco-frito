import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import StoryTellerStar from 'material-ui/lib/svg-icons/action/stars'

import Avatar from './avatar'

const STORY_TELLER_STYLE = {
  position: 'absolute',
  fill: 'yellow',
  width: '34px',
  height: '34px',
  top: '-10px',
  left: '-10px'
}

export default React.createClass({
  propTypes: {
    player: PropTypes.object,
    onClickNextStep: PropTypes.func
  },

  render () {
    return (
      <div className='player-header'>
        <Avatar player={this.props.player}>
          {
            this.props.player.isStoryTeller &&
              <StoryTellerStar
                className='storyTeller'
                style={STORY_TELLER_STYLE}/>
          }
        </Avatar>
        <span className='label'>
          My color
        </span>
        {
          this.props.player.leader &&
            <RaisedButton
              style={{ float: 'right', marginTop: '14px' }}
              label={stepLabel(this.props.player.leader.step)}
              primary
              onClick={this.props.onClickNextStep}
            />
        }
      </div>
    )
  }
})

function stepLabel (step) {
  switch (step % 4) {
    case 0:
      return 'Start Round'

    case 1:
      return 'Show story'

    case 2:
      return 'Show cards'

    case 3:
      return 'Finish round'
  }
}
