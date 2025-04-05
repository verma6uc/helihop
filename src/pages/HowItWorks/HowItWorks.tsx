
import { Helicopter, Zap, Shield, Users, Navigation, Clock } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 font-montserrat text-4xl font-bold text-helihop-dark md:text-5xl">
          How HeliHop Works
        </h1>
        <p className="mb-12 text-xl text-helihop-medium">
          Discover our revolutionary approach to helicopter travel with AI-optimized routing
        </p>
      </div>

      {/* Process Overview */}
      <div className="mb-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-helihop-blue/10 text-helihop-blue">
            <Navigation className="h-6 w-6" />
          </div>
          <h3 className="mb-2 font-montserrat text-xl font-semibold text-helihop-dark">1. Select Your Route</h3>
          <p className="text-helihop-medium">
            Choose your pickup and destination locations from our network of premium helipads.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-helihop-blue/10 text-helihop-blue">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="mb-2 font-montserrat text-xl font-semibold text-helihop-dark">2. AI Optimization</h3>
          <p className="text-helihop-medium">
            Our proprietary algorithm calculates the most efficient route and flight plan.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-helihop-blue/10 text-helihop-blue">
            <Helicopter className="h-6 w-6" />
          </div>
          <h3 className="mb-2 font-montserrat text-xl font-semibold text-helihop-dark">3. Take Flight</h3>
          <p className="text-helihop-medium">
            Arrive at your helipad, meet your pilot, and enjoy a luxurious and efficient journey.
          </p>
        </div>
      </div>

      {/* Technology Section */}
      <div className="mb-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-helihop-dark">
            Our Innovative Technology
          </h2>
          <p className="text-lg text-helihop-medium">
            HeliHop combines advanced aerospace engineering with cutting-edge artificial intelligence
            to revolutionize urban transportation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-helihop-blue/5 to-helihop-gold/5 p-6">
            <h3 className="mb-3 font-montserrat text-xl font-semibold text-helihop-dark">
              Intelligent Route Optimization
            </h3>
            <p className="mb-4 text-helihop-medium">
              Our proprietary algorithm analyzes thousands of variables including weather patterns, 
              air traffic, and passenger distribution to create the most efficient routes possible.
            </p>
            <ul className="space-y-2 text-helihop-medium">
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 flex-shrink-0 text-helihop-blue" />
                <span>Reduces flight time by up to 30% compared to traditional routing</span>
              </li>
              <li className="flex items-start">
                <Zap className="mr-2 h-5 w-5 flex-shrink-0 text-helihop-blue" />
                <span>Dynamic rerouting based on real-time conditions</span>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-helihop-blue/5 to-helihop-gold/5 p-6">
            <h3 className="mb-3 font-montserrat text-xl font-semibold text-helihop-dark">
              Safety-First Design
            </h3>
            <p className="mb-4 text-helihop-medium">
              Safety is our highest priority, which is why our entire system is built with 
              multiple redundancies and continuous monitoring.
            </p>
            <ul className="space-y-2 text-helihop-medium">
              <li className="flex items-start">
                <Shield className="mr-2 h-5 w-5 flex-shrink-0 text-helihop-blue" />
                <span>Triple-redundant navigation and communication systems</span>
              </li>
              <li className="flex items-start">
                <Users className="mr-2 h-5 w-5 flex-shrink-0 text-helihop-blue" />
                <span>Pilots with minimum 5,000 hours of flight experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-montserrat text-3xl font-bold text-helihop-dark">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-montserrat text-lg font-semibold text-helihop-dark">
              How far in advance should I book?
            </h3>
            <p className="text-helihop-medium">
              We recommend booking at least 24 hours in advance to ensure availability, 
              though last-minute bookings can often be accommodated for Premium and Elite members.
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-montserrat text-lg font-semibold text-helihop-dark">
              What happens if weather conditions are unfavorable?
            </h3>
            <p className="text-helihop-medium">
              Safety is our priority. If weather conditions don\'t meet our strict safety standards, 
              we\'ll offer you the option to reschedule your flight or receive a full refund.
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-montserrat text-lg font-semibold text-helihop-dark">
              How much luggage can I bring?
            </h3>
            <p className="text-helihop-medium">
              Each passenger can bring one personal item and one standard carry-on bag (up to 10kg). 
              For additional or larger luggage, please contact our customer service in advance.
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-montserrat text-lg font-semibold text-helihop-dark">
              Are pets allowed on HeliHop flights?
            </h3>
            <p className="text-helihop-medium">
              Small pets in appropriate carriers are welcome on our flights. Please inform us when booking 
              so we can ensure a comfortable experience for all passengers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
