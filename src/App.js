import './styles.css';
import GlowingCard from './Components/GlowingCard/GlowingCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Router components
import Dashboard from './Components/Dashboard/Dashboard'; // Import Dashboard component

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={GlowingCard} />
          <Route path="/dashboard" component={Dashboard} /> {/* Add route for Dashboard */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
