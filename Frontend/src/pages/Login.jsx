import { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const transition = {
    duration: 1.2,
    ease: [0.4, 0, 0.2, 1],
  };

  return (
    <section className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center lg:p-4">
      <div className="relative w-full h-screen lg:h-[680px] lg:max-w-[1000px] [perspective:2000px]">
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          initial={false}
          animate={{ rotateY: isSignup ? 180 : 0 }}
          transition={transition}
        >
          {/* LOGIN SIDE (Form Left, Image Right) */}
          <div
            className={`absolute inset-0 w-full h-full [backface-visibility:hidden] 
            ${isSignup ? "opacity-0 pointer-events-none" : "opacity-100 z-10"} 
            transition-opacity duration-500`}
          >
            <AuthCard
              title="Welcome Back"
              subtitle="Please enter your details to sign in."
              buttonText="Log In"
              toggleText="Don’t have an account?"
              toggleAction="Create account"
              onToggle={() => setIsSignup(true)}
              isSignup={false}
              reverseLayout={false} // Form Left, Image Right
              bgImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"
            />
          </div>

          {/* SIGNUP SIDE (Image Left, Form Right) */}
          <div
            className={`absolute inset-0 w-full h-full [backface-visibility:hidden]
            ${isSignup ? "opacity-100 z-10" : "opacity-0 pointer-events-none"} 
            transition-opacity duration-500`}
            style={{ transform: "rotateY(180deg)" }}
          >
            <AuthCard
              title="Start Journey"
              subtitle="Create your account to get started."
              buttonText="Sign Up"
              toggleText="Already have an account?"
              toggleAction="Log in"
              onToggle={() => setIsSignup(false)}
              isSignup={true}
              reverseLayout={true} // Image Left, Form Right
              bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AuthCard = ({ title, subtitle, buttonText, toggleText, toggleAction, onToggle, isSignup, bgImage, reverseLayout }) => (
  <div className="w-full h-full bg-white lg:rounded-[2.5rem] lg:shadow-2xl overflow-hidden grid lg:grid-cols-2 relative">
    
    {/* Mobile Faint Background */}
    <div 
      className="absolute inset-0 lg:hidden opacity-[0.07] pointer-events-none"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />

    {/* IMAGE PANEL - Handled with order classes for swapping */}
    <div className={`hidden lg:block relative overflow-hidden group ${reverseLayout ? 'lg:order-1' : 'lg:order-2'}`}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-900/90 mix-blend-multiply" />
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-12">
        <div className="mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <h3 className="text-4xl font-black tracking-tighter uppercase">VDPatil</h3>
        </div>
        <p className="italic text-blue-100 text-lg opacity-90 max-w-xs">
          Empowering your digital growth through innovation.
        </p>
      </div>
    </div>

    {/* FORM PANEL */}
    <div className={`relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white/90 lg:bg-white backdrop-blur-sm lg:backdrop-blur-none ${reverseLayout ? 'lg:order-2' : 'lg:order-1'}`}>
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
        <p className="text-slate-500 mt-2 font-medium">{subtitle}</p>
      </div>

      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 flex items-center justify-center gap-3 border border-slate-200 py-3.5 rounded-xl hover:bg-slate-50 transition-all active:scale-95 text-sm font-bold text-slate-700">
            <FcGoogle size={20} /> <span className="sm:hidden md:inline">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-3 bg-[#1877F2] py-3.5 rounded-xl hover:bg-blue-700 transition-all active:scale-95 text-sm font-bold text-white shadow-lg shadow-blue-100">
            <FaFacebook size={20} /> <span className="sm:hidden md:inline">Facebook</span>
          </button>
        </div>

        <div className="flex items-center py-2">
          <div className="flex-grow border-t border-slate-100" />
          <span className="mx-4 text-[10px] font-bold text-slate-400 tracking-widest">OR EMAIL</span>
          <div className="flex-grow border-t border-slate-100" />
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
          />

          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all mt-4">
            {buttonText}
          </button>
        </form>
      </div>

      <p className="mt-10 text-center text-slate-500 text-sm font-medium">
        {toggleText}{" "}
        <button
          type="button"
          onClick={onToggle}
          className="text-blue-600 font-bold hover:underline underline-offset-4"
        >
          {toggleAction}
        </button>
      </p>
    </div>
  </div>
);

export default Login;