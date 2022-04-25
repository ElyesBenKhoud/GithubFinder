import React from "react";

const About = () => {
  return (
    <div data-testid="About-component">
      <h1 className="text-6xl mb-4"> Github finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <br />
          <a href="https://ro.linkedin.com/in/mohamedelyes-benkhoud?challengeId=AQGwQq9rnXRpMQAAAYAnh2DHqP9CBYShTOSzEcqwRIHejs-GPCLSnDPBBzOKO08Jn4YRJi0jJddqOWrZkm7xlawUyvRveSnNdw&submissionId=00cc3c65-29bb-e516-51fc-28de1a1cea56">
            {" "}
            Mohamed Elyes Ben khoud
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Me
        </a>
      </p>
    </div>
  );
};

export default About;
