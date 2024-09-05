const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full">
      <div className="bg-gray-100 p-8 w-full flex flex-col  px-28">
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">Contact our team</h1>
          <p className="text-center text-gray-600 mb-8 px-32">
            Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and
            get onboard in less than 5 minutes.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="p-10 flex-1">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className="mt-1 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="mt-1 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  className="mt-1 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <div className="flex">
                  <select id="countryCode" name="countryCode" className="p-2 border border-gray-300 rounded-l-lg">
                    <option value="US">US</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+1 (555) 000-0000"
                    className="mt-1 p-2 border border-gray-300 rounded-r-lg flex-grow"
                  />
                </div>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Leave us a message..."
                  className="mt-1 p-2 border border-gray-300 rounded-lg h-32"
                ></textarea>
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Services</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="Website design"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded-lg"
                    />
                    <span className="ml-2 text-sm text-gray-700">Website design</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="Content creation"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded-lg"
                    />
                    <span className="ml-2 text-sm text-gray-700">Content creation</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="UX design"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded-lg"
                    />
                    <span className="ml-2 text-sm text-gray-700">UX design</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="Strategy & consulting"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded-lg"
                    />
                    <span className="ml-2 text-sm text-gray-700">Strategy & consulting</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="User research"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded-lg"
                    />
                    <span className="ml-2 text-sm text-gray-700">User research</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value="Other"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded-lg"
                    />
                    <span className="ml-2 text-sm text-gray-700">Other</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col text-gray-700 p-10">
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-semibold mb-2">Chat with us</h2>
              <p>Speak to our friendly team via live chat.</p>
              <ul className="list-none mt-2 ">
                <li>
                  <a href="#" className="text-indigo-800 hover:underline">
                    Start a live chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-800 hover:underline">
                    Shoot us an email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-800 hover:underline">
                    Message us on X
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start mt-16">
              <h2 className="text-lg font-semibold mb-2">Call us</h2>
              <p>Call our team Mon-Fri from 8am to 5pm.</p>
              <p className="text-indigo-800 mt-2">
                <a href="tel:+15550000000" className="hover:underline">
                  +1 (555) 000-0000
                </a>
              </p>
            </div>

            <div className="flex flex-col items-start mt-16">
              <h2 className="text-lg font-semibold mb-2">Visit us</h2>
              <p>Chat to us in person at our Melbourne HQ.</p>
              <p className="text-indigo-800 mt-2">
                <a href="https://www.google.com/maps?q=100+Smith+Street,+Collingwood+VIC+3066" className="hover:underline">
                  100 Smith Street, Collingwood VIC 3066
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
