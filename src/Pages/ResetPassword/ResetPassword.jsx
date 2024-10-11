import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [newPass, setNewpass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errorPass, setErrorPass] = useState(false);
  const [errorConfirm, setErrorConfirm] = useState(false);
  const [errorMismatch, setErrorMismatch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorPass(false);
    setErrorConfirm(false);
    setErrorMismatch(false);

    
    if (newPass === '') {
      setErrorPass(true);
    }

    if (confirm === '') {
      setErrorConfirm(true);
    }

  };

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center flex-col h-full">
        <h2 className="font-medium text-2xl font-mono">Quick Release</h2>
        <div className="bg-white mt-4 p-6 items-center rounded-lg">
          <div className="w-auto">
            <h1 className="font-semibold text-1xl font-sans text-lg">Set Your Password</h1>
            <div className="flex flex-col mt-4">
              <label className="pb-2">New Password</label>
              <input
                placeholder="******"
                value={newPass}
                onChange={(e) => setNewpass(e.target.value)}
                className="rounded-md p-2 font-light bg-transparent border-[1px] outline-blue-500"
              />
              {errorPass && <p style={{ color: 'red' }}>This field is required.</p>}
            </div>

            
            <div className="flex flex-col mt-4">
              <label className="pb-2">Confirm Password</label>
              <input
                placeholder="******"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="rounded-lg p-2 font-light bg-transparent border-[1px] outline-blue-500"
              />
              {errorConfirm && <p style={{ color: 'red' }}>This field is required.</p>}
              
            </div>

            
            <button className="mt-5 bg-blue-600 rounded-lg text-white pt-2 pb-2 w-96" onClick={handleSubmit}>
              Set Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
