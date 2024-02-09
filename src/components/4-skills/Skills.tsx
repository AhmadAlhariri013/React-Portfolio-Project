import { useEffect, useState } from 'react';
import './skills.css'
import axios from 'axios';


const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
      const fetchSkills = async () => {
        try {
          const response = await axios.get('http://localhost:5126/api/Skills');
          setSkills(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching skills:', error);
        }
      };
  
      fetchSkills();
      
    }, [])
    console.log(skills[0].id)
  return (
    <section className="container" id="experience">
    <h2 className="title">Experience</h2>
    <div className="content">
      <div className="skills">
        {skills.map((skill, id) => {
          return (
            <div key={id} className="skills">
              <div className="skillImageContainer">
                <img src={skill.imageSrc} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>

    </div>
  </section>
  )
}

export default Skills
