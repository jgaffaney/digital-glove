import { Button, Box, Grid } from '@mui/material';
import EndCallButton from '../EndCallButton/EndCallButton';
import MainMenuButton from '../MainMenuButton/MainMenuButton';

function MainMenu() {



    return (
        <div>
            <Box sx={{ flexGrow: 1, m: 'auto' }}>
                <Grid container columnSpacing={{ xs: 6 }} sx={{ justifyContent: 'center', flexDirection: 'column' }}>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <MainMenuButton category='Airway' />
                    </Grid>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <MainMenuButton category='Chest' />
                    </Grid>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <MainMenuButton category='Access' />
                    </Grid>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <MainMenuButton category='Medication' />
                    </Grid>
                    <br /><br />
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <EndCallButton />
                    </Grid>
                </Grid>
            </Box>
            <br /><br />



        </div>
    )
}

export default MainMenu;