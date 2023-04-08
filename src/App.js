import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"

const routeVariants = {
  initial: {
      x: '100vh'
  },
  final: {
      x: '0vh'
  }
}

function LocationProvider({children}) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={(id) => location.id}>
      <Route path="/" element={<Home routeVariants={routeVariants} />} />
      <Route path="/about" element={<About routeVariants={routeVariants}/>} />
      <Route path="/contact" element={<Contact routeVariants={routeVariants}/>} />
    </Routes>
  );
}


function App() {

  // const location = useLocation();
  // console.log(location);

  return (
    <div className="App">
      <Header />
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </div>
  );
}

export default App;

