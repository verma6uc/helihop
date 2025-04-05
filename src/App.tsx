
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MembershipOptions from './pages/MembershipOptions/MembershipOptions';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import BookNow from './pages/BookNow/BookNow';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="book-now" element={<BookNow />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="membership-options" element={<MembershipOptions />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
