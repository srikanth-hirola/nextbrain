/* eslint-disable no-unused-vars */
import React from 'react';

const VideoSection = () => {
  return (
    <div className="section_home-image-display">
          <div className="home-image-display_height">
            <div className="home-image-display_image-wrapper">
              <div
                data-poster-url="https://cdn.prod.website-files.com/65ae37af356fab4845432048/65ae37af356fab4845432118_Website v11-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/65ae37af356fab4845432048/65ae37af356fab4845432118_Website v11-transcode.mp4,https://cdn.prod.website-files.com/65ae37af356fab4845432048/65ae37af356fab4845432118_Website v11-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="home-image-display_video w-background-video w-background-video-atom"
              >
                <video
                  id="1e3d4a11-1389-446c-385e-6dd122db0386-video"
                  autoPlay
                  loop
                  style={{
                    backgroundImage: 'url(../cdn.prod.website-files.com/65ae37af356fab4845432048/65ae37af356fab4845432118_Website%20v11-poster-00001.jpg)'}}
                  muted
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="assets/video-2.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="../cdn.prod.website-files.com/65ae37af356fab4845432048/65ae37af356fab4845432118_Website%20v11-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
            </div>
          </div>
          <div
            data-w-id="81023342-02eb-b869-f6e8-31c7c725e7dd"
            className="home-image-display_trigger"
          ></div>
        </div>
  );
};

export default VideoSection;

