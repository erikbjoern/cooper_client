import React from 'react';
import {Input, Select, Grid, Segment} from 'semantic-ui-react'

const InputFields = ({ onChangeHandler, genderOnChangeHandler }) => {
  return (
      <Grid relaxed padded columns='equal'>
        <Grid.Column>
          <Input
            fluid
            label="Distance"
            color={'#9eba6e'}
            onChange={onChangeHandler}
            name="distance" 
            id="distance"
          ></Input>
        </Grid.Column>

        <Grid.Column width={3}>
          <Select
            fluid
            onChange={genderOnChangeHandler} 
            placeholder="gender" 
            name="gender" 
            id="gender"
            options={
              [
                { value: "female", text: 'Female' }, 
                { value: "male", text: 'Male'}
              ]
            }
          />
        </Grid.Column>    

        <Grid.Column>
          <Input
            fluid
            label="Age"
            onChange={onChangeHandler} 
            name="age" 
            id="age"
          ></Input>
        </Grid.Column>
      </Grid>
  )
 }

export default InputFields