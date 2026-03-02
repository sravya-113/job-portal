import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RecruiterLogin.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

const RecruiterLogin = () => {
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setShowRecruiterLogin, setCompanyToken, setCompanyData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Step 1 of Sign Up: collect text data then show logo upload step
    if (state === 'Sign Up' && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      const endpoint =
        state === 'Login'
          ? `${BACKEND_URL}/api/company/login`
          : `${BACKEND_URL}/api/company/register`;

      const body =
        state === 'Login'
          ? { email, password }
          : { name, email, password };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || 'Something went wrong');
        return;
      }

      // Save token + company data globally & persist in localStorage
      setCompanyToken(data.token);
      setCompanyData(data.company);
      setShowRecruiterLogin(false);
      toast.success(
        state === 'Login' ? 'Logged in successfully!' : '🎉 Account created successfully!'
      );
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      <ToastContainer />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h1>Recruiter {state}</h1>
        <p>Welcome back! Please sign in to continue</p>

        {state === 'Sign Up' && isTextDataSubmitted ? (
          /* Step 2 — Logo Upload */
          <div className="upload-section">
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Upload Logo"
              />
              <input
                type="file"
                id="image"
                hidden
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <p>Upload Company <br /> Logo</p>
          </div>
        ) : (
          /* Text fields */
          <>
            {state !== 'Login' && (
              <div className="input-group">
                <img src={assets.person_icon} alt="Person" />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="input-group">
              <img src={assets.email_icon} alt="Email" />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <img src={assets.lock_icon} alt="Lock" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        )}

        {state === 'Login' && (
          <p className="forgot-password">Forgot Password</p>
        )}

        <button type="submit" disabled={loading}>
          {loading
            ? 'Please wait...'
            : state === 'Login'
              ? 'Login'
              : isTextDataSubmitted
                ? 'Create Account'
                : 'Next'}
        </button>

        {state === 'Login' ? (
          <p className="switch-text">
            Don&apos;t have an account?{' '}
            <span onClick={() => { setState('Sign Up'); setIsTextDataSubmitted(false); }}>
              Sign up
            </span>
          </p>
        ) : (
          <p className="switch-text">
            Already have an account?{' '}
            <span onClick={() => { setState('Login'); setIsTextDataSubmitted(false); }}>
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowRecruiterLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="close-icon"
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;
