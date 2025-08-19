import Welcome from '../../Components/Welcome/Welcome.jsx'
import Frame from '../../Components/SnakeGame/Frame.jsx'

export const ROUTES = [
    {
        path: '/',
        element: <Welcome onSubmitName={(name) =>console.log("Name Submitted")}/>
    }, {
        
        path: '/game',
        element: <Frame/>

    }
]