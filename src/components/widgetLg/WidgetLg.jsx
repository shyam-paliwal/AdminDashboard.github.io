import "./widgetLg.css"

export const WidgetLg = () => {

  const Button=({type})=>{
    return <button className={"widgetLgButton" + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest transaction</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://media.licdn.com/dms/image/C4D03AQHp-jWYmbwXSg/profile-displayphoto-shrink_100_100/0/1655819549538?e=1697068800&v=beta&t=4nCYIFtXE30Kd_aife5Pokg6TdgX4GqWhS00vkv5_qE" 
              alt="" 
              className="widgetLgImg"
              />
              <span className="widgetLgName">shyam paliwal</span>
            </td>
            <td className="widgetLgDate">2 jun 2022</td>
            <td className="widgetLgAmount">$122.54</td>
            <td className="widgetLgStatus">
              <Button type="Approved" className="widgetLgButton Approved"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://media.licdn.com/dms/image/C4D03AQH3mNR0DqSGww/profile-displayphoto-shrink_100_100/0/1654659383025?e=1697068800&v=beta&t=W1Dsr8_PLlvhkm95c0VCbFDUAapTkvntCnkQIAykF0Y" 
              alt="" 
              className="widgetLgImg"
              />
              <span className="widgetLgName">nohel korrom</span>
            </td>
            <td className="widgetLgDate">10 jun 2022</td>
            <td className="widgetLgAmount">$522.54</td>
            <td className="widgetLgStatus">
              <Button type="Declined" className="widgetLgButton Declined"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://media.licdn.com/dms/image/D4D03AQFZqftIU-rx-Q/profile-displayphoto-shrink_100_100/0/1690274670803?e=1697068800&v=beta&t=p5iruoDk3XOBtxRYAvgyey63Awx0Nhxhrn2MNV0TnJk" 
              alt="" 
              className="widgetLgImg"
              />
              <span className="widgetLgName">sandeep oron</span>
            </td>
            <td className="widgetLgDate">15 jun 2022</td>
            <td className="widgetLgAmount">$1220.54</td>
            <td className="widgetLgStatus">
              <Button type="Pending" className="widgetLgButton Pending"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://media.licdn.com/dms/image/D4D03AQFwlfqzcdcOmw/profile-displayphoto-shrink_100_100/0/1683455089201?e=1697068800&v=beta&t=5hkI9CY-xsuZw6eeuQ1JeUatYnhgTqvT9j4obfKAC2g" 
              alt="" 
              className="widgetLgImg"
              />
              <span className="widgetLgName">vikash shingh</span>
            </td>
            <td className="widgetLgDate">25 jun 2022</td>
            <td className="widgetLgAmount">$100.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" className="widgetLgButton Approved" />
            </td>
          </tr>
        </table>
    </div>
  )
}
