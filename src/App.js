import { Pages } from 'pages';
import { Components } from './shared';

function App() {
    return (
        <div className="App">
            <Components.Header />
            <Pages.PageNotFound />
        </div>
    );
}

export default App;
