import { Button } from '@mui/material';


// a reusable component for the treatment categories on the main Menu
// pass in a category
function MainMenuButton({category}) {

     // click handler
     const handleClick = () => {
        console.log('Clicked: ', category);
    }

    return (
        <div>
            <Button
            sx={{width: '200px', height: '75px', mt:'4%', mb:'4%'}}
                variant="contained"
                onClick={handleClick}
            >
                {category}
            </Button>
        </div>
    )
}

export default MainMenuButton;