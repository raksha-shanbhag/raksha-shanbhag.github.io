import './workExpList.css';
import WorkExp from './WorkExp/workExp';
import Navbar from '../Navbar/navbar';
import favicon from '../../img/favicon.PNG';
import Ford from '../../img/workExp/Ford.png';
import PCC from '../../img/workExp/pointclickcare.png';
import Triyo from '../../img/workExp/triyo.webp';
import ModSoft from '../../img/workExp/modsoft.PNG';


import Ford1Me from '../../img/workExp/ford_1_me.jpeg'
import Ford2Me from '../../img/workExp/ford_2_me.jpeg'
import PCCMe from '../../img/workExp/pointClickCare_me.jpeg'
import TriyoMe from '../../img/workExp/Triyo_me.jpeg'
import ModSoftMe from '../../img/workExp/ford_1_me.jpeg'

const workExpList = () => {
    return (
    <div style={{backgroundColor: "#ececec"}}>
        <Navbar />
        <div className='workExpList'>
            <div className="wex-texts">
                <h1 className='title'>Work Experience</h1>
            </div> 
            <div className="exp-1">
                <WorkExp 
                    title = "Full Stack Developer" 
                    icon = {Triyo}
                    date = "May 2022 to Aug 2022"
                    company = "TriyoSoft Analytics"
                    workPic = {TriyoMe}
                />
            </div>
            <div className="exp-2">
                <WorkExp 
                    title = "Software Engineering Intern" 
                    icon = {PCC}
                    date = "Sep 2021 to Dec 2021"
                    company = "PointClickCare"
                    workPic = {PCCMe}
                />
            </div>
            <div className="exp-3">
                <WorkExp 
                    title = "Software Developer" 
                    icon = {Ford}
                    date = "Jan 2021 to Apr 2021"
                    company = "Ford Motors Company"
                    workPic = {Ford2Me}
                />
            </div>
            <div className="exp-4">
                <WorkExp 
                    title = "Software Infrastructure Developer" 
                    icon = {Ford}
                    date = "May 2020 to Aug 2020"
                    company = "Ford Motors Company"
                    workPic = {Ford1Me}
                />
            </div>
            <div className="exp-5">
                <WorkExp 
                    title = "Application Developer" 
                    icon = {ModSoft}
                    date = "Dec 2019"
                    company = "ModSoft LLC."
                    workPic = {ModSoftMe}
                    last
                />
            </div>
        </div>
    </div>)
}

export default workExpList
