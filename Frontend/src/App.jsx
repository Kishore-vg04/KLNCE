import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Component/Footer";
import Admissions from "./Component/Department/Department";
import Placement from "./Pages/Placement";
import Resources from "./Pages/Resources";
import Activities from "./Pages/Activities";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      {/* Full screen flex layout */}
      <div className="min-h-screen flex flex-col">

        {/* Main Content */}
        <main className="flex-grow w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/department" element={<Admissions />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;