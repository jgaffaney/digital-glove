import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, InputLabel, MenuItem, 
            FormControl, Select, Grid, Button } from '@mui/material'; 


function Customize() {

    const defaultButtonLayout = {
        button1: '',
        button2: '',
        button3: '',
        button4: '',
        button5: '', 
        button6: '', 
        button7: '', 
        button8: '', 
        button9: ''
    }

    const dispatch = useDispatch();

    const category = useSelector(store=>store.treatments)

    const [txCategory, setTxCategory] = useState('');
    const [buttonLayout, setButtonLayout] = useState(defaultButtonLayout);

    

    const handleChange = (e) => {
        setTxCategory(e.target.value)
        console.log('tx cat: ', txCategory);
    }

    const handleButtonChange = (e, button) => {
        console.log('target.value: ', e.target.value);

        setButtonLayout({...buttonLayout, [button]: e.target.value})
        console.log('button layout after set in handleButtonChange: ', buttonLayout);
    }

    const handleClick = () => {
        // let layout = [];
        // for(let button in buttonLayout){
        //     console.log('typeof button: ', typeof button);
        //     console.log('typeof: ', (typeof button == 'string'), 'button: ', button);
        //     if(typeof button == 'number'){
        //         layout.push(button);
        //     }
        // }
        // console.log('layout in handleclick: ', layout)
        dispatch({type: 'POST_USER_LAYOUT', payload: buttonLayout, category: txCategory})
    }

    useEffect(() => {
        dispatch({type: 'FETCH_TREATMENTS', payload: txCategory})
    }, [txCategory])

    return(
        <div>
        <h2>Customize your button layout here</h2>
        <Box>
            <FormControl fullWidth sx={{display: 'flex', justifyContent: 'center', padding: '10px', width:'100%'}}>
                <InputLabel id='tx-category'>Select a treatment category</InputLabel>
                <Select
                    labelId='tx-category'
                    id='tx-dropdown'
                    value={txCategory}
                    label='Category'
                    onChange={handleChange}
                >
                    <MenuItem value={'airway'}>Airway</MenuItem>
                    <MenuItem value={'chest'}>Chest</MenuItem>
                    <MenuItem value={'access'}>Access</MenuItem>
                    <MenuItem value={'medication'}>Medication</MenuItem>                    
                </Select>
            </FormControl>
        </Box>
        <Box>
            {/* <FormControl> */}
                <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button1'
                            label='Button 1'
                            value={buttonLayout.button1}
                            onChange={(e) => handleButtonChange(e, 'button1')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>       
                    <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button2'
                            label='Button 2'
                            value={buttonLayout.button2}
                            onChange={(e) => handleButtonChange(e, 'button2')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>    
                    <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button3'
                            label='Button 3'
                            value={buttonLayout.button3}
                            onChange={(e) => handleButtonChange(e, 'button3')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>   
                    <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button4'
                            label='Button 4'
                            value={buttonLayout.button4}
                            onChange={(e) => handleButtonChange(e, 'button4')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>    
                    <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button5'
                            label='Button 5'
                            value={buttonLayout.button5}
                            onChange={(e) => handleButtonChange(e, 'button5')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>   
                    <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button6'
                            label='Button 6'
                            value={buttonLayout.button6}
                            onChange={(e) => handleButtonChange(e, 'button6')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>     
                    <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button7'
                            label='Button 7'
                            value={buttonLayout.button7}
                            onChange={(e) => handleButtonChange(e, 'button7')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>  
                    <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button8'
                            label='Button 8'
                            value={buttonLayout.button8}
                            onChange={(e) => handleButtonChange(e, 'button8')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>  
                    <Grid item xs={5}>
                        <Select 
                            // labelId='button2'
                            id='button9'
                            label='Button 9'
                            value={buttonLayout.button9}
                            onChange={(e) => handleButtonChange(e, 'button9')}
                        >
                            {category.map(treatment => {
                                return(
                                    <MenuItem value={treatment.id}>{treatment.procedure}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>         
                </Grid>
               
            {/* </FormControl> */}
        </Box>
        <Button onClick={handleClick} variant='contained' >Save Layout</Button>

        </div>
    )
}

export default Customize;
