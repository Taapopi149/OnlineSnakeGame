import Welcome from '../Components/Welcome/Welcome.jsx'
import Frame from '../Components/SnakeGame/Frame.jsx'

export const ROUTES = [
    {
        path: '/',
        element: <Welcome/>
    }, {
        
        path: '/game',
        element: <Frame/>

    }
]