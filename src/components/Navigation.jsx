import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaBriefcase, FaMoon } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { IoCalendarSharp, IoMailSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Navigation = ({ setContent }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 1 }}
    >
      {/* Socials */}
      <div className="flex space-x-4 opacity-70 items-center absolute bottom-4 right-4 ">
        <Link
          href={"https://www.linkedin.com/in/jaylen-garner"}
          target="_blank"
        >
          <SiLinkedin
            size="35px"
            className="hover:opacity-70 transition-opacity duration-700"
          />
        </Link>
        <Link href={"https://github.com/JaylenGarner"} target="_blank">
          <SiGithub
            size="35px"
            className="hover:opacity-70 transition-opacity duration-700"
          />
        </Link>
      </div>

      {/* Experience */}
      <div className="absolute top-4 right-4 flex space-x-4 opacity-70 items-center">
        <FaBriefcase
          onClick={() => setContent("Experience")}
          size="30px"
          className="hover:opacity-70 hover:cursor-pointer transition-opacity duration-700"
        />
        <PiCertificateFill
          onClick={() => setContent("Certifications")}
          size="35px"
          className="hover:opacity-70 hover:cursor-pointer  transition-opacity duration-700"
        />
      </div>

      {/* Contact */}
      <div className="absolute bottom-4 left-4 flex space-x-4 opacity-70 items-center">
        <IoMailSharp
          onClick={() => setContent("Contact")}
          size="35px"
          className="hover:opacity-70 transition-opacity duration-700 hover:cursor-pointer"
        />
        <Link href={"https://calendly.com/jaylen-garner"} target="_blank">
          <IoCalendarSharp
            size="35px"
            className="hover:opacity-70 transition-opacity duration-700"
          />
        </Link>
      </div>

      {/* Development */}
      <div className="absolute top-4 left-4 flex space-x-4 opacity-70 items-center">
        <FaCode
          onClick={() => setContent("Projects")}
          size="35px"
          className="hover:opacity-70 hover:cursor-pointer transition-opacity duration-700"
        />
        <Link href={"https://moonraydevelopment.com"} target="_blank">
          <FaMoon
            size="32px"
            className="hover:opacity-70 transition-opacity duration-700"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default Navigation;
