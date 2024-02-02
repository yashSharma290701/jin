import './MainArea.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function MainArea(){
    return(
        <div className="MainArea">
        <h1 className="TimeTable">Time Sheet</h1>
        <div className="timesection">
        <p className="time">Total Hours: 0.0</p>
        <p className="year">29 Jan 2024 - 04 Feb 2024</p>
        </div>
        <div className='Allocation'>
<p className='AllocationText'>Allocation Extension</p>
<p><ArrowDropDownIcon className='downarrow'/></p>
        </div>
        </div>
    )
}
export default MainArea;




