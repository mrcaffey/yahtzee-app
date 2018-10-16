import React from 'react'
import { Grid, Button, Divider } from 'semantic-ui-react'
import Dice from './Dice'

const Board = ({ roll, dice, rollDice }) => {
  const maxRoll = roll === 3
  const disabled = maxRoll ? { disabled: true } : {}
  return (
  <Grid>
    <Grid.Row>
      <Button
        fluid
        onClick={rollDice}
        {...disabled}
        >
        Roll
        </Button>
        <Grid.Column width={16}>
          <Divider hidden />
        </Grid.Column>
        { roll > 0 && dice.map( (d,i) => <Dice key={i} value={d} /> ) }
    </Grid.Row>
  </Grid>
  )
}

export default Board