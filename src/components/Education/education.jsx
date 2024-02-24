import React from 'react'
import './education.css'

function Education() {
  return (
    <div className='edu-card'>
        <div className='edu-heading'  id='education'>Education</div>
        <div className='edu-desc'>My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
        <div>
            <ul>
                <li className='edu-li'>
                    <div className='edu-card1'>
                        <div> 
                            <div>
                                <img src='https://www.jims.in/Admissions_2021/images/logo.jpg' className='edu-img'/>
                            </div>
                            <div>
                                <div>JIMS, Sector-3, Rohini</div>
                                <div>New Delhi</div>
                            </div>
                            <div>
                                Masters of computer application (MCA)
                            </div>
                            <div>
                                2022-24
                            </div>
                            <div>
                            Grade: --%
                            </div>
                        </div>

                    </div>
                </li>


                <li className='edu-li'>

                <div className='edu-card1'>
                        <div>
                            <div>
                                <img src='https://iitmjp.ac.in/wp-content/uploads/2023/11/4d77f5df-7269-4e45-a145-3778e3fc7353.png' className='edu-img'/>
                            </div>
                            <div>
                                <div>IITM , JANAKPURI (G.G.S.I.P.U)</div>
                                <div>New Delhi</div>
                            </div>
                            <div>
                                Bachelor of Computer Applications (BCA)
                            </div>
                            <div>
                                2019-22
                            </div>
                        </div>
                        <div>
                            Grade: 83.7%
                        </div>
                    </div>


                </li>


                <li className='edu-li'>

                <div className='edu-card1'>
                        <div>
                            <div>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/4/4b/Kamal_Public_School.png' className='edu-img'/>
                            </div>
                            <div>
                                <div>Kamal public sr. sec. school, Vikaspuri</div>
                                <div>New Delhi</div>
                            </div>
                            <div>
                                HIGH SCHOOL (XII) 
                            </div>
                            <div>
                                2019
                            </div>
                        </div>
                        <div>
                            Grade: 64%
                        </div>
                    </div>

                    




                </li>
            </ul>
        </div>
    </div>
  )
}

export default Education