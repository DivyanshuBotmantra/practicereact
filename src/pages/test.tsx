import React, { useState } from 'react'

const Test: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const cardStyle: React.CSSProperties = {
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '3rem 4rem',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
        minWidth: '400px',
        maxWidth: '500px',
        width: '100%'
    }

    const titleStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#333',
        marginBottom: '0.5rem',
        letterSpacing: '0.5px'
    }

    const formStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        textAlign: 'left'
    }

    const inputGroupStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    }

    const labelStyle: React.CSSProperties = {
        fontSize: '0.9rem',
        fontWeight: '500',
        color: '#333',
        marginBottom: '0.25rem'
    }

    const inputStyle: React.CSSProperties = {
        padding: '0.875rem 1rem',
        fontSize: '1rem',
        border: '2px solid #e0e0e0',
        borderRadius: '10px',
        outline: 'none',
        transition: 'all 0.3s ease',
        fontFamily: 'inherit'
    }

    const submitButtonStyle: React.CSSProperties = {
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        marginTop: '1rem',
        transform: 'translateY(0)'
    }

    return (
        <div style={cardStyle}>
            <h2 style={titleStyle}>Password Visibility</h2>
            <div id="signup-form" className="form-container">
                <form style={formStyle} onSubmit={(e) => e.preventDefault()}>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            style={inputStyle}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            required
                            style={inputStyle}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
                        />
                        <div>
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={(e) => setShowPassword(e.target.checked)}
                            />
                            <label htmlFor="showPassword">
                                Show Password
                            </label>
                        </div>

                    </div>

                    <button
                        type="submit"
                        style={submitButtonStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Test

