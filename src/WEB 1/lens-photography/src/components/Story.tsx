import React from 'react';
import './Story.css';

const Story: React.FC = () => {
  return (
    <section className="story">
      <div className="story-container">
        <div className="story-content">
          <div className="story-text">
            <h2 className="story-title">
              Every Work Tells<br />A Story
            </h2>
            <p className="story-description">
              Change colors, texts, add animations, shape dividers and border options.
              Divi allows just about anything and everything. Of course, you can create 
              galleries to stunningly present your masterpieces on the web.
            </p>
            <p className="story-description">
              professional photographers, Divi is the tool you should consider if you are 
              ready to take your project to new heights. With practicality, sophistication, 
              you can bring any page you fancy into being. It is so if this means a killer 
              you can modify and alter the look of Divi to the very last detail.
            </p>
          </div>
          <div className="story-video">
            <div className="video-thumbnail">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=350&fit=crop" 
                alt="Video Thumbnail" 
              />
              <div className="play-button">
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
