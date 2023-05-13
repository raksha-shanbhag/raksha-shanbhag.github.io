
import mix2 from '../../../img/about/mix2.PNG';
import mix from '../../../img/about/mix.PNG';
import Frontend from '../../../img/about/frontend.PNG';
import Backend from '../../../img/about/backend.PNG';

const SkillsBox = () => {
    return (
        <div class="skills-box">
            <div class="single-rb">
                <div class="front-side"><img alt="" src={mix} className='rotating-image'/></div>
                <div class="back-side"><img alt="" src={Frontend} className='rotating-image'/></div>
                <div class="left-side"><img alt="" src={Backend} className='rotating-image'/></div>
                <div class="right-side"><img alt="" src={mix2} className='rotating-image'/></div>
                <div class="top-side"><img alt="" src={mix2} className='rotating-image'/></div>
                <div class="bottom-side"><img alt="" src={mix2} className='rotating-image'/></div>
            </div>
        </div>
    )
};

export default SkillsBox;