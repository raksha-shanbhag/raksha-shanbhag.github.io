import './workExpList.css';
import WorkTerm from './WorkExp/workExp';
import Ford from '../../../img/workExp/Ford.png';
import PCC from '../../../img/workExp/pointclickcare.png';
import Triyo from '../../../img/workExp/triyo.webp';
import BioRender from '../../../img/workExp/biorender.svg';
import ModSoft from '../../../img/workExp/modsoft.PNG';
import Ford1Me from '../../../img/workExp/ford_1_me.jpeg'
import Ford2Me from '../../../img/workExp/ford_2_me.jpeg';
import PCCMe from '../../../img/workExp/pointClickCare_me.jpeg';
import TriyoMe from '../../../img/workExp/Triyo_me.jpeg';
import ModSoftMe from '../../../img/workExp/modsoft_me.jpeg';
import BioRenderMe from '../../../img/workExp/biorender_me.JPG';

const WorkExperience = () => {
    return (
        <div className='workExpList' id='work'>
            <div className="wex-texts">
                <h1 className='title'>Work Experience</h1>
            </div> 
            <div className="exp-1">
                <WorkTerm 
                    title = "Software Growth Engineering Intern" 
                    icon = {BioRender}
                    date = "Jan 2023 to Apr 2023"
                    company = "BioRender"
                    workPic = {BioRenderMe}
                />
            </div>
            <div className="exp-2">
                <WorkTerm 
                    title = "Full Stack Developer" 
                    icon = {Triyo}
                    date = "May 2022 to Aug 2022"
                    company = "TriyoSoft Analytics"
                    workPic = {TriyoMe}
                />
            </div>
            <div className="exp-3">
                <WorkTerm 
                    title = "Software Engineering Intern" 
                    icon = {PCC}
                    date = "Sep 2021 to Dec 2021"
                    company = "PointClickCare"
                    workPic = {PCCMe}
                />
            </div>
            <div className="exp-4">
                <WorkTerm 
                    title = "Software Developer" 
                    icon = {Ford}
                    date = "Jan 2021 to Apr 2021"
                    company = "Ford Motors Company"
                    workPic = {Ford2Me}
                />
            </div>
            <div className="exp-5">
                <WorkTerm 
                    title = "Software Infrastructure Developer" 
                    icon = {Ford}
                    date = "May 2020 to Aug 2020"
                    company = "Ford Motors Company"
                    workPic = {Ford1Me}
                />
            </div>
            <div className="exp-6">
                <WorkTerm 
                    title = "Application Developer" 
                    icon = {ModSoft}
                    date = "Dec 2019"
                    company = "ModSoft LLC."
                    workPic = {ModSoftMe}
                    last
                />
            </div>
        </div>)
}

export default WorkExperience;
