import certifications from "../lib/certifications";

const Certifications = () => {
  return (
    <div className="card max-h-[90dvh] max-w-[90dvw] overflow-scroll">
      <h2 className="text-2xl font-bold">Certifications</h2>
      <div className="flex  items-center justify-center flex-wrap">
        {certifications.map((certification) => {
          return (
            <div>
              <img src={certification.logo.url} className="w-[200px] m-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
