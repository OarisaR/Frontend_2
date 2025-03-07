import './App.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Services from './Services';
import PricingPlans from './PricingPlans'; 
import PromoBanner from './PromoBanner';
import Form from './Form';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleAdsPage from './GoogleAdsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/google-ads" 
            element={
              <>
                <GoogleAdsPage />
              </>
            } 
          />
          <Route 
            path="/" 
            element={
              <>
                <NavBar />
                <Hero />
                <Services />
                <PricingPlans /> 
                <PromoBanner />
                <Form />
                <Footer />
              </>
            } 
          />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;