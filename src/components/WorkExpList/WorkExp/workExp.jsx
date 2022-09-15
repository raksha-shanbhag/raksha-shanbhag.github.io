import './workExp.css'
import Profile from '../../../img/profile_pic.PNG';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { InfoOutlined } from '@mui/icons-material';
import { workExpTermPoints } from '../workExpArray';

const workExp = ({
    title, 
    icon, 
    date, 
    picture,
    company,
    last,
    stack
}) => {
    const workExpPts = workExpTermPoints[title];
    console.log(workExpPts)

    const workTermPoints = (
        workExpPts.map((work, index) => {
            return(<li key={index}>{work.one}</li>);
        })
    )

    const card = (
        <div className='workExp'>
            <div className='w-left'>
                <img
                    src={Profile}
                    className='Pic'
                />
            </div>
            <div className='w-right'>
                <ul className='text-wrap'>
                    {workTermPoints}
                </ul>
                <div>
                    Tech Stack
                </div>
            </div>
        </div>
    )

    return (
    <div className="work-exp-row">
        <div className="work-Date">
            <h4> {date} </h4>
        </div>
        <div className="work-details" >
            <Accordion
                elevation = {5}
                sx = {
                    {
                        backgroundColor : "white",
                        margin: "0"
                        // borderStyle: "dashed",
                        // borderLeftStyle: "dashed",
                        // borderRightStyle: "dashed",
                        // borderTopStyle: "dashed",
                        // borderBottom: last ? "dashed" : "none"
                    }
                }
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className="accordion-settings"> 
                        <img src={icon} className="icon-props" /> 
                    </Typography>
                    <Typography className="accordion-job"> 
                        <h2>{title}</h2> 
                        <h4>{company} </h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    { card }
                </AccordionDetails>
            </Accordion>
        </div>
    </div>)
}

export default workExp
