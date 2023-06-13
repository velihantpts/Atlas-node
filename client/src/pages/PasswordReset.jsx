import React, { useState } from 'react';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetPassword = async () => {
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password }) // Verileri doğru formatta gönder
      });

      if (response.ok) {
        console.log("Şifre değiştirme işlemi başarılı");
      } else {
        console.log("Şifre değiştirme işlemi başarısız");
      }
    } catch (error) {
      console.error('Şifre sıfırlama hatası:', error);
    }
  };


  return (
    <div>
      <div className='w-full flex flex-row justify-evenly items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className="">
          <div className="flex flex-col">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-12 space-y-4 md:space-y-12 sm:p-24">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Reset to password
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="name@company.com"
                      required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-400"
                    onClick={resetPassword}
                  >
                    Degiştir
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
