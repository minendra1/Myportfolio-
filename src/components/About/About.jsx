import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Minendra Gangwar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                /*'App Developer',
                'UI/UX Designer',*/
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
           I am an aspiring full-stack developer with a strong foundation in building dynamic, user-focused web applications. As a fresher, I have gained practical experience through personal and academic projects, developing both front-end interfaces and back-end systems. I am passionate about clean code, continuous improvement, and bringing ideas to life through technology.


          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1-fVqKJgs7ZVnn3oYHuDuJkDBrz2UiVCi/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border-4 border-purple-700 rounded-full flex items-center justify-center overflow-hidden"
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  perspective={1000}
  scale={1.02}
  transitionSpeed={1000}
  gyroscope={true}
>
  <img
    src={profileImage}
    alt="Minendra Gangwar"
    className="w-full h-full rounded-full object-cover"
  />
</Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
