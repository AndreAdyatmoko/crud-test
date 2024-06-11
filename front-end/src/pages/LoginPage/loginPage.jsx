import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Bagian yang muncul di desktop */}
      <div className="hidden md:flex flex-1">
        <div className="bg-primery flex-1 min-h-screen flex justify-center items-center">
          <div className="text-center bg-hover p-20 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-freeman">
              Welcome to <br /> My ABC Mobile
            </h1>
            <h2 className="text-white font-freeman">
              Please Sign In, or Register to continue the process
            </h2>
          </div>
        </div>
        <div className="bg-white h-screen flex-1 min-h-screen flex justify-center items-center">
          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-freeman justify-center items-center flex p-2">
              Create an Account
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label
                  className="block mb-2 text-white font-freeman text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-3 py-2 focus:outline-none focus:border-secondary rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block mb-2 text-white font-freeman text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 focus:outline-none focus:border-secondary rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-hover focus:outline-none font-freeman"
                >
                  Create Account
                </button>
                <div className="flex items-center mt-4 gap-1">
                  <p className="text-white font-freeman">
                    Already have an account?
                  </p>
                  <a
                    href="/login"
                    className="text-sm text-black font-freeman hover:underline"
                  >
                    Login
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Bagian yang muncul di mobile */}
      <div className="md:hidden bg-primery min-w-full h-screen flex justify-center items-center">
        <div className="bg-secondary p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-freeman justify-center items-center flex p-2">
            Create an Account
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label
                className="block mb-2 text-white font-freeman text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 focus:outline-none focus:border-secondary rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="block mb-2 text-white font-freeman text-sm"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 focus:outline-none focus:border-secondary rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-hover focus:outline-none font-freeman"
              >
                Create Account
              </button>
              <div className="flex items-center mt-4 gap-1">
                <p className="text-white font-freeman">
                  Already have an account?
                </p>
                <a
                  href="/login"
                  className="text-sm text-black font-freeman hover:underline"
                >
                  Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
