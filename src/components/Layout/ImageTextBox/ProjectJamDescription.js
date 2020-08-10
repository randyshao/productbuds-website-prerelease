import React from 'react';
import ProjectJamImage from '../../../assets/images/projectjam-image.svg';

const ProjectJamDescription = () => {
  return (
    <div className='ImageTextBoxBackground'>
      <div className='MainContent'>
        <div className='ImageTextBox'>
          <div className='TextContainer'>
            <h1>What is Project Jam?</h1>
            <p>
              Product Buds Project Jam immmerses PB members into a collaborative
              product development process and offers an opportunity for them to
              enhance their project portfolio. Whether you're an aspiring
              Product Manager (PM) who just stumbled on this field recently or a
              current PM who's well-versed in many areas of product, this
              opportunity will allow you to sharpen core business, technical,
              teamwork, and interpersonal skills with others in the community.
            </p>
          </div>
          <img className='TextImage' src={ProjectJamImage} />
        </div>
      </div>
    </div>
  );
};

export default ProjectJamDescription;
