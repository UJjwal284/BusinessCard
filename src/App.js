import './App.css';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomSpellCheck from "./Modules/CustomSpellCheck";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <CustomSpellCheck/>

        </div>
    );
}

export default App;
