import { Visibility } from "@material-ui/icons"
import "./widgetSm.css"

export const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Member</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src="https://assets.leetcode.com/users/avatars/avatar_1684156727.png"
             alt=""
             className="widgetSmImg"
             />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">anna bereck</span>
              <span className="widgetSmUserTitle">software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://media.licdn.com/dms/image/D4D03AQHRXONLggu06g/profile-displayphoto-shrink_100_100/0/1690427752183?e=1697068800&v=beta&t=Wf7YEWOFUzjxlxngr4ChD53ucVr4YB04e9wXmKu-KEw"
             alt=""
             className="widgetSmImg"
             />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">Ashish kumar</span>
              <span className="widgetSmUserTitle">software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://media.licdn.com/dms/image/C4D03AQH99gU34r_xEQ/profile-displayphoto-shrink_100_100/0/1654085041951?e=1697068800&v=beta&t=S3RLheDpAu145JMBGhaSHbfSflgEypX6b92kYYqYdro"
             alt=""
             className="widgetSmImg"
             />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">Sivansh shukla</span>
              <span className="widgetSmUserTitle">hardware Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://media.licdn.com/dms/image/D4D35AQFjioVuvE5PnA/profile-framedphoto-shrink_100_100/0/1683806385122?e=1692306000&v=beta&t=HIR9R47pZFZhEKYjSnkWAbkSHNeji0ssA7pSd9vUyO8"
             alt=""
             className="widgetSmImg"
             />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">manglam paliwal</span>
              <span className="widgetSmUserTitle">software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility  className="widgetSmIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://media.licdn.com/dms/image/D4D03AQH1Fvgl6Ar91g/profile-displayphoto-shrink_100_100/0/1687797452176?e=1697068800&v=beta&t=aRh7MaqYmNUpqFNVIfDVWqK2RXihX-RpDDUzXdy-u6Q"
             alt=""
             className="widgetSmImg"
             />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">anchal paliwal</span>
              <span className="widgetSmUserTitle">software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </button>
          </li>
        </ul>
    </div>
  )
}


