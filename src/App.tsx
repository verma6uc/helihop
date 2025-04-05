
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MembershipOptions from './pages/MembershipOptions/MembershipOptions';
import HowItWorks from './pages/HowItWorks/HowItWorks';

// Placeholder components for routes - these will be replaced with actual page components
const HomePage = () => (
  <div className="container mx-auto py-12">
    <h1 className="mb-8 text-4xl font-bold text-helihop-dark md:text-5xl">Welcome to HeliHop</h1>
    <p className="text-lg text-helihop-medium">Intelligent helicopter routing at your service.</p>
  </div>
);

const BookNow = () => (
  <div className="container mx-auto py-12">
    <h1 className="mb-8 text-4xl font-bold text-helihop-dark">Book Now</h1>
    <p className="text-lg text-helihop-medium">Book your next helicopter journey.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="book-now" element={<BookNow />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="membership-options" element={<MembershipOptions />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
