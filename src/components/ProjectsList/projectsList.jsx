import './projectsList.css'
import Project from './Project/project'
import Navbar from '../Navbar/navbar';

import RSVP_img from '../../img/projects/RSVP-tracker.PNG'
import Riddle_img from '../../img/projects/RSVP-tracker.PNG'
import GroupList_img from '../../img/projects/RSVP-tracker.PNG'
import MST_img from '../../img/projects/MST_tree.png'
import Simon_img from '../../img/projects/RSVP-tracker.PNG'
import WebCrawler_img from '../../img/projects/RSVP-tracker.PNG'

const ProjectsList = ({page}) => {
    return (
        <div>
            <Navbar page = {page} />
            <div className='projects'>
                <div className="pl-texts">
                    <h1 className='title'> Projects</h1>
                    <p className='description'>
                        These are my side Projects.
                    </p>
                </div>
                <div className="list">
                    <Project cover={RSVP_img} title = "RSVP-tracker"/>
                    <Project cover={Riddle_img} title = "Riddle Board Web App"/>
                    <Project cover={GroupList_img} title = "Group List"/>
                    <Project cover={MST_img} title = "Minimum Spanning Tree"/>
                    <Project cover={WebCrawler_img} title = "Multi-Threaded Web Crawler"/>
                    <Project cover={Simon_img} title = "Simon Game"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
