import { useReactToPrint } from "react-to-print";
import React, { useContext, useRef } from "react";
import ErrorPage from "../components/ErrorPage";
import { ResumeContext } from "../store/resume";

const Resume = () => {
  const componentRef = useRef();
  const { resume } = useContext(ResumeContext);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${resume.fullName} Resume`,
    onAfterPrint: () => alert("Print Successful!"),
  });

  //👇🏻 function that replaces the new line with a break tag
  const replaceWithBr = (string) => {
    return string.replace(/\n/g, "<br />");
  };

  //👇🏻 returns an error page if the result object is empty
  if (JSON.stringify(resume) === "{}") {
    return <ErrorPage />;
  }

  return (
    <>
      <button onClick={handlePrint}>Print Page</button>
      <main className="container" ref={componentRef}>
        <header className="header">
          <div>
            <h1>{resume.fullName}</h1>
            <p className="resumeTitle headerTitle">
              {resume.currentPosition} ({resume.currentTechnologies})
            </p>
            <p className="resumeTitle">
              {resume.currentLength}year(s) work experience
            </p>
          </div>
          <div>
            <img
              src={resume.image_url}
              alt={resume.fullName}
              className="resumeImage"
            />
          </div>
        </header>
        <div className="resumeBody">
          <div>
            <h2 className="resumeBodyTitle">PROFILE SUMMARY</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: replaceWithBr(resume.objective),
              }}
              className="resumeBodyContent"
            />
          </div>
          <div>
            <h2 className="resumeBodyTitle">WORK HISTORY</h2>
            {resume.workHistory.map((work) => (
              <p className="resumeBodyContent" key={work.name}>
                <span style={{ fontWeight: "bold" }}>{work.name}</span> -{" "}
                {work.position}
              </p>
            ))}
          </div>
          <div>
            <h2 className="resumeBodyTitle">JOB PROFILE</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: replaceWithBr(resume.jobResponsibilities),
              }}
              className="resumeBodyContent"
            />
          </div>
          <div>
            <h2 className="resumeBodyTitle">JOB RESPONSIBILITIES</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: replaceWithBr(resume.keypoints),
              }}
              className="resumeBodyContent"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
