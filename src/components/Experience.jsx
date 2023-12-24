import experience from "../lib/experience";

const Experience = () => {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold">Experience</h2>

      <div className="flex flex-col">
        {experience.map((position, i) => {
          return (
            <div className=" flex flex-col">
              <h3 className="text-center text-xl font-bold">
                {position.title}
              </h3>

              <a href={position.url} target="_blank">
                <div className="flex items-center justify-center space-x-2 hover:opacity-60 transition-opacity duration-700">
                  <h3 className="text-center text-lg font-bold underline-offset-2 underline">
                    {position.company}
                  </h3>
                </div>
              </a>

              <h3 className="text-center text-md opacity-70 pt-1">
                {position.tenure}
              </h3>
              <p className="pt-4">{position.description}</p>

              {/* Divider */}
              {i !== experience.length - 1 && (
                <div className=" border-1 border-t border-white text-center mt-8 mb-8 border-opacity-10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
