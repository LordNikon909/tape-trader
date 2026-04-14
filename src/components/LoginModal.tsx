"use client";

import { useState } from "react";
import { signIn } from "next-auth/react"; // Use the client-side helper

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Sign Up
      </button>

      {isOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>JOIN TAPE TRADER</h2>
            <p>Create an account to start your collection.</p>

            <button
              onClick={() => signIn("google")}
              style={googleButtonStyle}
            >
              Continue with Google
            </button>

            <button
              onClick={() => setIsOpen(false)}
              style={{ marginTop: '20px', display: 'block', width: '100%' }}
            >
              [ Cancel ]
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Minimal inline styles to keep it functional without Tailwind clutter
const overlayStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
};

const modalStyle: React.CSSProperties = {
  backgroundColor: '#111', color: 'white', padding: '40px', textAlign: 'center', border: '1px solid #333'
};

const googleButtonStyle: React.CSSProperties = {
  backgroundColor: 'white', color: 'black', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer', width: '100%'
};
