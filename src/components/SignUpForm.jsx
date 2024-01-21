export default function SignUpForm({ setIsNewAccount }) {
  const handleClick = () => {
    setIsNewAccount(false);
  };
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border border-jade-700 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1>Create an account</h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-primary-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-primary-600 dark:ring-offset-zinc-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-jade-500">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full bg-jade-500">
                Create an account
              </button>
              <p className="text-sm font-light">
                Already have an account?{" "}
                <span
                  className="font-medium text-jade-500 hover:underline"
                  onClick={handleClick}
                >
                  Login here
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
