import "./topbar.css"
import {NotificationsNone, } from '@material-ui/icons';
import { Language, Settings } from '@material-ui/icons';

export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">shyamadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
            
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
            
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://media.licdn.com/dms/image/C4D03AQHp-jWYmbwXSg/profile-displayphoto-shrink_100_100/0/1655819549538?e=1697068800&v=beta&t=4nCYIFtXE30Kd_aife5Pokg6TdgX4GqWhS00vkv5_qE" alt="" className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}
