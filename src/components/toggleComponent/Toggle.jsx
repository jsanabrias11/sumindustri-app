import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import './Toggle.css';

export const Toggle = ({ initialState = 'amount'}) => {
    const [isOn, setIsOn] = useState(initialState);

    const handleChange = ({ target }) => {
        setIsOn(target.value)
    }

    return (
        <Box sx={{ widt: 50 }}>
          <FormControl fullWidth >
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={isOn}
            //   label="Age"
              onChange={handleChange}              
            >
              <MenuItem value={'amount'}>$</MenuItem>
              <MenuItem value={'porcent'}>%</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
}




