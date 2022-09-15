import './workExpList.css';
import WorkExp from './WorkExp/workExp';
import Navbar from '../Navbar/navbar';
import favicon from '../../img/favicon.PNG';
import Ford from '../../img/workExp/Ford.png';
import PCC from '../../img/workExp/pointclickcare.png';
import Triyo from '../../img/workExp/triyo.webp';
import ModSoft from '../../img/workExp/modsoft.PNG';

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
                />
            </div>
            <div className="exp-2">
                <WorkExp 
                    title = "Software Engineering Intern" 
                    icon = {PCC}
                    date = "Sep 2021 to Dec 2021"
                    company = "PointClickCare"
                />
            </div>
            <div className="exp-3">
                <WorkExp 
                    title = "Software Developer" 
                    icon = {Ford}
                    date = "Jan 2021 to Apr 2021"
                    company = "Ford"
                />
            </div>
            <div className="exp-4">
                <WorkExp 
                    title = "Software Infrastructure Developer" 
                    icon = {Ford}
                    date = "May 2020 to Aug 2020"
                    company = "Ford"
                />
            </div>
            <div className="exp-5">
                <WorkExp 
                    title = "Application Developer" 
                    icon = {ModSoft}
                    date = "Dec 2019"
                    company = "ModSoft LLC."
                    last
                />
            </div>
        </div>
    </div>)
}

export default workExpList
