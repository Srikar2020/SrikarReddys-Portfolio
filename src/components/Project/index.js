import React, {useState} from 'react';

function Project({index}) {

    const [projects] = useState([
        {
            name: 'Weather Dashboard',
            image: "weather_dashboard.jpg",
            github: 'https://github.com/Srikar2020/Weather-Dashboard',
            link: 'https://srikar2020.github.io/Weather-Dashboard/',
            technologies: 'HTML/CSS/JS'
        },
        {
            name: 'Free Thinkers',
            image: "free_thinkers.png",
            github: 'https://github.com/Srikar2020/Free-Thinkers',
            link: 'https://protected-sierra-77345.herokuapp.com/',
            technologies: 'Node.js/Express.js/MySQL/CSS'
        },
        {
            name: 'Team Profile Generator',
            image: "team_profile_generator.png",
            github: 'https://github.com/Srikar2020/Team-Profile-Generator',
            link: '',
            technologies: 'Node.js'
        },
        {
            name: 'Employee Tracker',
            image: "employee_tracker.png",
            github: 'https://github.com/Srikar2020/Employee-Tracker',
            link: '',
            technologies: "Node.js/MySQL"
        },
        {
            name: 'Bay Area Real Estate',
            image: "bay_area_real_estate.png",
            github: 'https://github.com/Srikar2020/Project1',
            link: 'https://srikar2020.github.io/Project1/',
            technologies: "HTML/CSS/JS"
        },
        {
            name: 'Workday Scheduler',
            image: "workday_scheduler.jpg",
            github: 'https://github.com/Srikar2020/Work-Day-Planner/deployments',
            link: 'https://srikar2020.github.io/Work-Day-Planner/',
            technologies: "HTML/CSS/JS"
          },
      ]);
    
    const project = projects[index];

    return (
        <article class="project">
            <div class={`project-img project-${index}`}>
                <div>
                    <div class = "project-icons">
                        <a href = {`${project.github}`} target = "_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                        {project.link && <a href = {`${project.link}`} target = "_blank"><i class="fa fa-link" aria-hidden="true"></i></a>}
                    </div>
                    <h3>{project.name}</h3>
                    <h4>{project.technologies}</h4>
                </div>
            </div>
        </article>
    );
}

export default Project;
