import { useState } from 'react'
import Navbar from '../Component/Navbar'

import History from '../Component/About/History'
import Overview from '../Component/About/Overview'
import Governance from '../Component/About/Governance'
import Founder from '../Component/About/Founder'
import Program from '../Component/About/Program'
import VisionMission from '../Component/About/VisionMission'

const About = () => {

  const [activeSection, setActiveSection] = useState("VisionMission")

  const renderComponent = () => {
    switch (activeSection) {
      case "VisionMission":
        return <VisionMission/>
      case "History":
        return <History />
      case "Overview":
        return <Overview />
      case "Governance":
        return <Governance />
      case "Founder":
        return <Founder />
      case "Program":
        return <Program />
      default:
        return <History />
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar name={"About K.L.N"} />
      <div className='flex justify-center gap-10 py-10'>
        <div className='w-[250px] h-fit bg-white rounded-xl shadow-md p-5 sticky top-24'>

          <h3 className='text-xl font-semibold text-purple-800 mb-4 tracking-wide'>
            About KLNCE
          </h3>

          <ul className='flex flex-col gap-2'>
            <li
              onClick={() => setActiveSection("VisionMission")}
              className={`px-3 py-2 rounded-lg cursor-pointer transition duration-300
              ${activeSection === "VisionMission"
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-100 hover:text-purple-700"}`}
            >
              Vission and Mission
            </li>

            <li
              onClick={() => setActiveSection("History")}
              className={`px-3 py-2 rounded-lg cursor-pointer transition duration-300
              ${activeSection === "History"
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-100 hover:text-purple-700"}`}
            >
              History of College
            </li>

            <li
              onClick={() => setActiveSection("Overview")}
              className={`px-3 py-2 rounded-lg cursor-pointer transition duration-300
              ${activeSection === "Overview"
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-100 hover:text-purple-700"}`}
            >
              Overview
            </li>

            <li
              onClick={() => setActiveSection("Governance")}
              className={`px-3 py-2 rounded-lg cursor-pointer transition duration-300
              ${activeSection === "Governance"
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-100 hover:text-purple-700"}`}
            >
              Governance
            </li>

            <li
              onClick={() => setActiveSection("Founder")}
              className={`px-3 py-2 rounded-lg cursor-pointer transition duration-300
              ${activeSection === "Founder"
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-100 hover:text-purple-700"}`}
            >
              Founder
            </li>

            <li
              onClick={() => setActiveSection("Program")}
              className={`px-3 py-2 rounded-lg cursor-pointer transition duration-300
              ${activeSection === "Program"
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-100 hover:text-purple-700"}`}
            >
              Program Details
            </li>

          </ul>
        </div>

        <div className='w-[75%] md:w-[60%] bg-white p-8 rounded-xl shadow-md'>
          {renderComponent()}
        </div>

      </div>
    </div>
  )
}

export default About