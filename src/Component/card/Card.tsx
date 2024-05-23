import profileImg1 from '../../assets/images/1.svg';
import profileImg2 from '../../assets/images/2.svg';
import profileImg3 from '../../assets/images/3.svg';
import profileImg4 from '../../assets/images/4.svg';

const Card = () => {
    const cardDetails = [
        {
            profileImg:profileImg1,
            cardNum:"190",
            cardName:"Employees",
            activeMember:"180",
            waitingMember:"10",
        },
        {
            profileImg:profileImg2,
            cardNum:"21",
            cardName:"Spouse",
            activeMember:"17",
            waitingMember:"04",
        },
        {
            profileImg:profileImg3,
            cardNum:"05",
            cardName:"Child",
            activeMember:"10",
            waitingMember:"00",
        },
        {
            profileImg:profileImg4,
            cardNum:"216",
            cardName:"Total Members",
            activeMember:"101",
            waitingMember:"01",
        },
    ]
    
  return (
    <div className='cards'>
        {cardDetails.map((item,index) => (
            <div className='card-wrap' key={index}>
               <div className="card-profile-wrap">
                <div className="show-img">
                        <img src={item.profileImg} alt="profile" />
                    </div>
                    <div className="card-details">
                        <div className="card-num">
                            {item.cardNum}
                        </div>
                        <div className="card-name">
                            {item.cardName}
                        </div>
                    </div>
               </div>
              <div className="card-members">
                <ul>
                    <li><span className='active-member'>Active Members</span> <span className='active-member'>{item.activeMember}</span></li>
                    <li><span className='active-member'>Waiting Members</span> <span className='waiting-member'>{item.waitingMember}</span></li>
                </ul>
              </div>
                
        
            </div>
        ))}
    </div>
  )
}

export default Card