import { resumeInfo } from "../constants";

const Resume = () => {
  // useGSAP(() => {
  //   gsap.from("#resume", {
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.7,
  //     delay: 0.5,
  //   });
  // }, [{ scope: "#resume" }]);

  return (
    <section className="mx-auto flex min-h-dvh w-full items-center justify-center px-4 pt-28">
      <div className="w-full max-w-3xl rounded-2xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur-lg">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold tracking-wide">
            {resumeInfo.name}
          </h1>
          <p className="text-sm text-gray-200">
            {resumeInfo.email} | {resumeInfo.phone}
          </p>
          <div className="mt-2 flex justify-center gap-4 max-sm:text-sm">
            {resumeInfo.mediaUrls.map((mediaUrl) => (
              <a
                key={mediaUrl.label}
                href={mediaUrl.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
                download={mediaUrl.download}
              >
                {mediaUrl.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-6 h-0.5 w-full bg-white/20" />
        {/* Skills */}
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            <div>
              <h3 className="mb-1 font-medium">Frontend</h3>
              <ul className="list-inside list-disc text-gray-200">
                {resumeInfo.skills.frontend.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-1 font-medium">Backend</h3>
              <ul className="list-inside list-disc text-gray-200">
                {resumeInfo.skills.backend.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-1 font-medium">Tools</h3>
              <ul className="list-inside list-disc text-gray-200">
                {resumeInfo.skills.tools.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div>
          <h2 className="mb-2 text-xl font-semibold">Projects</h2>
          <ul className="space-y-4">
            {resumeInfo.projects.map((project, idx) => (
              <li key={idx} className="rounded bg-white/5 p-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{project.name}</h3>
                    <div className="mb-1 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-blue-900/40 px-2 py-0.5 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="mb-1 list-inside list-disc text-sm text-gray-200">
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2 flex flex-col gap-1 text-xs sm:mt-0 sm:ml-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:underline"
                      >
                        Live
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:underline"
                      >
                        Repo
                      </a>
                    )}
                    {project.frontendRepo && (
                      <a
                        href={project.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:underline"
                      >
                        Frontend
                      </a>
                    )}
                    {project.backendRepo && (
                      <a
                        href={project.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:underline"
                      >
                        Backend
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Education</h2>
          <ul className="space-y-2 text-sm">
            {resumeInfo.education.map((edu, idx) => (
              <li key={idx} className="rounded bg-white/5 p-2">
                <span className="font-medium">
                  {edu.degree || edu.qualification}
                </span>{" "}
                — {edu.institution}{" "}
                <span className="text-gray-400">({edu.year})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
