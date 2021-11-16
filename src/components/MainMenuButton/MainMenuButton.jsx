import { Button } from '@mui/material';


// a reusable component for the treatment categories on the main Menu
// pass in a category
function MainMenuButton({category}) {

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClick}
            >
                {category}
            </Button>
        </div>
    )
}