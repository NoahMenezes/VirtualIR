import React, { useState } from 'react';
import '../Auth.css'; // Import the new CSS

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="auth-container">
            <div className="auth-form-box">
                <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
                
                <form>
                    <div className="input-group">
                        <input 
                            type="email" 
                            className="auth-input" 
                            placeholder="Email" 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="password" 
                            className="auth-input" 
                            placeholder="Password" 
                            required 
                        />
                    </div>

                    {isSignUp && (
                        <div className="input-group">
                            <input 
                                type="password" 
                                className="auth-input" 
                                placeholder="Confirm Password" 
                                required 
                            />
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>

                <p className="auth-toggle-link">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    <span onClick={toggleForm}>
                        {isSignUp ? ' Sign In' : ' Sign Up'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;