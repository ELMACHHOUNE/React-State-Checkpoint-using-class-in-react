// import { Component } from "react";
import "./index.css";
import { useState, useEffect } from "react";

export default function App() {
  const [Person] = useState({
    fullName: "Mohamed EL MACHHOUNE",
    bio: "Software engineer",
    imgSrc:
      "https://img.freepik.com/vecteurs-libre/modele-logo-codage-degrade_23-2148809439.jpg?semt=ais_hybrid&w=740",
    profession: "Dev",
  });

  const [shows, setShows] = useState(false);
  const [timeSinceMount, setTimeSinceMount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSinceMount((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleProfile = () => {
    setShows((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Checkpoint Correction
        </h1>

        <div className="flex justify-center mb-8">
          <button
            onClick={toggleProfile}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transform transition-all duration-200 hover:scale-105"
          >
            {shows ? "Hide Profile" : "Show Profile"}
          </button>
        </div>

        {shows && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
            <div className="p-8">
              <div className="flex flex-col items-center">
                <img
                  src={Person.imgSrc}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-lg mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {Person.fullName}
                </h2>
                <p className="text-indigo-600 font-semibold mb-4">
                  {Person.profession}
                </p>
                <p className="text-gray-600 text-center mb-6">{Person.bio}</p>
                <div className="bg-indigo-50 rounded-lg px-4 py-2">
                  <p className="text-indigo-700 font-medium">
                    Time since mount: {timeSinceMount} seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// this one for class method :)
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Person: {
//         fullName: "Mohamed EL MACHHOUNE",
//         bio: "Software engineer",
//         imgSrc:
//           "https://img.freepik.com/vecteurs-libre/modele-logo-codage-degrade_23-2148809439.jpg?semt=ais_hybrid&w=740",
//         profession: "Dev",
//       },
//       shows: false,
//       timeSinceMount: 0,
//     };

//     this.timer = null;
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((prevState) => ({
//         timeSinceMount: prevState.timeSinceMount + 1,
//       }));
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   toggleProfile = () => {
//     this.setState((prevState) => ({
//       shows: !prevState.shows,
//     }));
//   };

//   render() {
//     const { Person, shows, timeSinceMount } = this.state;

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
//             Checkpoint Correction
//           </h1>

//           <div className="flex justify-center mb-8">
//             <button
//               onClick={this.toggleProfile}
//               className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transform transition-all duration-200 hover:scale-105"
//             >
//               {shows ? "Hide Profile" : "Show Profile"}
//             </button>
//           </div>

//           {shows && (
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
//               <div className="p-8">
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={Person.imgSrc}
//                     alt="Profile"
//                     className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-lg mb-6"
//                   />
//                   <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                     {Person.fullName}
//                   </h2>
//                   <p className="text-indigo-600 font-semibold mb-4">
//                     {Person.profession}
//                   </p>
//                   <p className="text-gray-600 text-center mb-6">{Person.bio}</p>
//                   <div className="bg-indigo-50 rounded-lg px-4 py-2">
//                     <p className="text-indigo-700 font-medium">
//                       Time since mount: {timeSinceMount} seconds
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
