import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-black p-2 sm:p-4 flex items-center justify-center">
      <div
        className="
          w-full max-w-7xl
          grid gap-3
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          lg:grid-rows-3
        "
      >
        {/* Payment Method */}
        <div className="bg-white rounded-xl shadow px-4 py-4 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-1 row-span-1">
          <div>
            <h2 className="font-semibold text-base mb-4 text-gray-900">
              Payment Method
            </h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 flex items-center justify-center rounded bg-white border">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                    className="h-5"
                    alt="Mastercard"
                  />
                </span>
                <span className="flex-1 text-gray-900">
                  **** **** **** 2072
                </span>
                <span className="text-xs font-medium bg-gray-100 px-2 rounded text-gray-700">
                  Mastercard
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 flex items-center justify-center rounded bg-white border">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                    className="h-4"
                    alt="Visa"
                  />
                </span>
                <span className="flex-1 text-gray-900">
                  **** **** **** 2072
                </span>
                <span className="text-xs font-medium bg-gray-100 px-2 rounded text-gray-700">
                  Visa
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 flex items-center justify-center rounded bg-white border">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg"
                    className="h-4"
                    alt="Amex"
                  />
                </span>
                <span className="flex-1 text-gray-900">
                  **** **** **** 2072
                </span>
                <span className="text-xs font-medium bg-gray-100 px-2 rounded text-gray-700">
                  Amex
                </span>
              </div>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 mt-4 font-bold w-full">
            Confirm to pay
          </button>
        </div>

        {/* Slogan */}
        <div className="bg-white rounded-xl shadow flex items-center justify-center relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-1 row-span-1">
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute right-4 top-4 text-lg">🔔</span>
            <svg width="100%" height="100%">
              <ellipse cx="70" cy="70" rx="80" ry="38" fill="#def5e9" />
            </svg>
          </div>
          <div className="relative z-10 px-4 py-8">
            <h1 className="font-bold text-2xl md:text-3xl leading-tight text-gray-900">
              Smart Banking
              <br />
              Smart Living
            </h1>
          </div>
        </div>

        {/* Profile image */}
        <div className="bg-white rounded-xl shadow overflow-hidden flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2">
          <img
            src="https://media.istockphoto.com/id/1396644902/photo/businesswoman-posing-and-smiling-during-a-meeting-in-an-office.jpg?s=612x612&w=0&k=20&c=7wzUE1CRFOccGnps-XZWOJIyDvqA3xGbL2c49PU5_m8="
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Meeting photo */}
        <div className="bg-white rounded-xl shadow overflow-hidden flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 row-span-1">
          <img
            src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
            alt="Meeting"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 bg-transparent col-span-1 md:col-span-1 lg:col-span-1 row-span-1">
          {[
            "https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=",
            "https://media.istockphoto.com/id/181866332/photo/red-wall-calendar.jpg?s=612x612&w=0&k=20&c=FpWwH-rY03pLmNsibkcJ_zbnqCIx1sbI5pRsQ9q5yLg=",
            "https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?semt=ais_hybrid&w=740",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
          ].map((src, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow flex items-center justify-center p-3"
            >
              <img src={src} className="h-8 w-8" alt="icon" />
            </div>
          ))}
        </div>

        {/* Mobile phone */}
        <div className="bg-white rounded-xl shadow overflow-hidden flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1 row-span-1 lg:row-span-2">
          <img
            src="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?cs=srgb&dl=pexels-hammad-khalid-155549-1786433.jpg&fm=jpg"
            alt="Mobile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Total Ads */}
        <div className="bg-white rounded-xl shadow flex flex-col justify-between px-5 py-5">
          <span className="font-semibold text-base text-gray-900">
            Total Ads
          </span>
          <div className="flex items-baseline mt-2 space-x-2">
            <span className="text-2xl font-bold text-gray-900">725K</span>
            <span className="text-green-600 text-base font-medium">+15%</span>
          </div>
          <svg width="96" height="30" className="mt-2">
            <polyline
              fill="none"
              stroke="#34D399"
              strokeWidth="3"
              points="8,24 32,12 50,18 68,8 88,20"
            />
          </svg>
        </div>

        {/* Stock Intelligence */}
        <div className="bg-white rounded-xl shadow flex flex-col justify-between px-5 py-4">
          <span className="font-semibold text-base mb-2 text-gray-900">
            Stock Intelligence
          </span>
          <div className="flex items-end mt-2 justify-between">
            <svg width="80" height="34" className="mr-2">
              <polyline
                fill="none"
                stroke="#e67c73"
                strokeWidth="3"
                points="5,30 38,18 62,24 98,8 112,28"
              />
            </svg>
            <span className="font-bold text-lg ml-auto text-gray-900">
              $92,020
            </span>
          </div>
        </div>

        {/* Organic Position */}
        <div className="bg-white rounded-xl flex flex-col shadow px-6 py-6 justify-between col-span-1 md:col-span-2 lg:col-span-2 row-span-1">
          <div className="flex justify-between items-start mb-2">
            <span className="font-semibold mb-1 text-lg text-gray-900">
              Organic Position
            </span>
            <select className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-900">
              <option>Today</option>
            </select>
          </div>
          <span className="text-4xl font-bold mb-2 text-gray-900">
            54 <span className="text-2xl text-gray-700">%</span>{" "}
            <span className="text-lg font-light text-gray-400">Avg</span>
          </span>
          <div className="flex items-end space-x-2 mt-2 h-16">
            <div
              className="bg-green-200 w-6 rounded"
              style={{ height: "35%" }}
            ></div>
            <div
              className="bg-green-400 w-6 rounded"
              style={{ height: "60%" }}
            ></div>
            <div
              className="bg-green-500 w-6 rounded"
              style={{ height: "90%" }}
            ></div>
            <div
              className="bg-green-200 w-6 rounded"
              style={{ height: "25%" }}
            ></div>
            <div
              className="bg-green-300 w-6 rounded"
              style={{ height: "50%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
