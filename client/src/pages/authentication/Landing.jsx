import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Users, Lock, Zap, Globe, Shield, Menu, X } from 'lucide-react';
import Navbar from './Navbar';
function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleShowLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  const handleShowSignup = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
    <Navbar/>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Connect with Everyone, Everywhere
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-10 leading-relaxed">
              Experience seamless communication with friends, family, and colleagues through WeChat's powerful messaging platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleShowSignup}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Free
              </button>
              <button
                onClick={handleShowLogin}
                className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-slate-200"
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
              <p className="text-slate-600 leading-relaxed">
                Send messages instantly with our optimized infrastructure ensuring real-time delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure & Private</h3>
              <p className="text-slate-600 leading-relaxed">
                End-to-end encryption keeps your conversations safe and private from unauthorized access.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Reach</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect with over a billion users worldwide, breaking down communication barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                More Than Just Messaging
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                WeChat is a modern, real-time chat application designed to make communication faster, safer, and more enjoyable. Whether you want to stay in touch with friends, collaborate with colleagues, or connect with a global community, WeChat provides a seamless platform with a clean and intuitive interface.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
Whether you're catching up with a close friend, collaborating one-on-one with a colleague, or staying connected with family across the globe, WeChat keeps your conversations personal and seamless. With fast, secure messaging and a beautifully designed interface, every interaction feels simple, private, and meaningful.

              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-sm text-slate-600">Active Users</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">20+</div>
                  <div className="text-sm text-slate-600">Countries</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-12 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12 text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Connect Instantly</h3>
                    <p className="text-emerald-50">individuals through real-time messaging.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Lock className="w-12 h-12 text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Privacy First</h3>
                    <p className="text-emerald-50"> user authentication and data protection features.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-12 h-12 text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Stay Connected</h3>
                    <p className="text-emerald-50">with a smooth interface across desktop and mobile.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
            Powerful features designed to enhance your communication experience
          </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    { 
      title: 'Online Status', 
      desc: 'See when friends are available to chat', 
      icon: <Users className="w-6 h-6 text-emerald-600" />, 
      bg: 'bg-emerald-100' 
    },
    { 
      title: 'Real-Time Messaging', 
      desc: 'Send and receive messages instantly', 
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />, 
      bg: 'bg-blue-100' 
    },
    { 
      title: 'Secure Messaging', 
      desc: 'End-to-end encryption for your privacy', 
      icon: <Lock className="w-6 h-6 text-red-600" />, 
      bg: 'bg-red-100' 
    },
    { 
      title: 'Instant Notifications', 
      desc: 'Never miss a message with real-time alerts', 
      icon: <Zap className="w-6 h-6 text-yellow-600" />, 
      bg: 'bg-yellow-100' 
    },
  ].map((feature, index) => (
    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-slate-600 text-sm">{feature.desc}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-8 h-8 text-emerald-500" />
                <span className="text-2xl font-bold">WeChat</span>
              </div>
              <p className="text-slate-400">
                Connecting the world, one message at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-emerald-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 WeChat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
