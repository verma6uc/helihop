
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

const HomePage = () => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-montserrat font-bold text-helihop-dark">
      Welcome to <span className="text-helihop-blue">HeliHop</span>
    </h1>
    <p className="mt-4 text-helihop-medium text-lg font-lato">
      Experience luxury helicopter travel with AI-optimized routes for maximum time savings.
    </p>
  </div>
);

const BookNowPage = () => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-montserrat font-bold text-helihop-dark">Book Now</h1>
  </div>
);

const HowItWorksPage = () => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-montserrat font-bold text-helihop-dark">How It Works</h1>
  </div>
);

const MembershipOptionsPage = () => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-montserrat font-bold text-helihop-dark">Membership Options</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="book-now" element={<BookNowPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="membership" element={<MembershipOptionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
