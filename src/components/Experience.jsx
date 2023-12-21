import { FaBriefcase } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";

const Experience = ({ setContent }) => {
  return (
    <div className="absolute top-4 right-4 flex space-x-4 opacity-70 items-center">
      <FaBriefcase
        onClick={() => setContent("Experience")}
        size="30px"
        className="hover:opacity-70 hover:cursor-pointer transition-opacity duration-700"
      />
      <PiCertificateFill
        size="35px"
        className="hover:opacity-70 transition-opacity duration-700"
      />
    </div>
  );
};

export default Experience;
