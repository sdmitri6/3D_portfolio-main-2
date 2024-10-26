import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA } from "../components";
import { experiences, skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [language, setLanguage] = useState('en');
  const content = {
    en: {
      greeting: "Hello, I'm",
      occupation: "Front-end and Motion Design, living in Mongolia, learned programming code and other things from Indra and other internet sources",
      skillsTitle: "My Skills",
      workExperienceTitle: "Work Experience",
      workDescription: "I am striving to further develop my skills by collaborating with various companies",
      skills: skills, 
      experiences: experiences,
    },
    mn: {
      greeting: "Сайн байна уу, Намайг",
      occupation: "Front-end болон хөдөлгөөнт дизайн мэргэжилтэй, Монголд амьдардаг. Indra Institute болон бусад интернет эх сурвалжаас програмчлалын код сурсан.",
      skillsTitle: "Миний Ур Чадвар",
      workExperienceTitle: "Ажлын туршлага",
      workDescription: "Би янз бүрийн компаниудтай хамтран ажиллаж, ур чадвараа хөгжүүлэхийг хичээж байна.",
      skills: skills, 
      experiences: experiences, 
    }
  };
  

  const switchLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'mn' : 'en'));
  };

  const currentContent = content[language];

  return (
    <section className='max-container'>
      <button onClick={switchLanguage} className='language-switch'>
        {language === 'en' ? 'Switch to Mongolian' : 'Switch to English'}
      </button>
      
      <h1 className='head-text'>
        {currentContent.greeting}{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Xdmitriy
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>{currentContent.occupation}</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>{currentContent.skillsTitle}</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>{currentContent.workExperienceTitle}</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>{currentContent.workDescription}</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
