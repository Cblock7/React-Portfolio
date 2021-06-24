import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Corey Block</h2>
         

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/corey-block-a508649a/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </p>

          <a href="./assets/Corey_Block_Resume(1).PDF"
            download="Corey_Block_Resume">
            Download Resume
          </a>
        </div>
      </div>

    </section>
  );
}

export default Resume;