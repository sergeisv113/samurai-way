import ReactDOM from "react-dom";
import SamApp from "./App";


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SamApp/>, div)
    ReactDOM.unmountComponentAtNode(div)
})