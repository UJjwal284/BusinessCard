import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub, BsInstagram} from 'react-icons/bs'
import DP from '../DP.jpg'

export default function BusinessCard() {
    return (<div className={'BCmain'}>
        <div className={'cardExt mx-auto '}>
            <div className={'card rounded-3'}>
                <img src={DP} className={'profileDP rounded-top'}/>
                <h6 className={'fw-bold text-white mt-2 mb-0'}>Laura Smith</h6>
                <p className={'mb-0'} style={{color: "wheat", fontSize: '11px', marginTop: '1px'}}>Frontend
                    Developer</p>
                <p className={'my-2'}
                   style={{color: "white", fontSize: '10px'}}>laurasmith.website</p>
                <div className={'btns'}>
                    <button className={'me-1 ms-3'}>Email</button>
                    <button className={'ms-1 me-3'}>LinkedIn</button>
                </div>
                <div className={'mx-3 mt-3'} style={{textAlign: "start"}}>
                    <h6 className={'fw-bold mb-1'} style={{color: "white"}}>About</h6>
                    <p className={'text-white'} style={{fontSize: '10px'}}>Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                </div>
                <div className={'mx-3 mt-0'} style={{textAlign: "start"}}>
                    <h6 className={'fw-bold mb-1'} style={{color: "white"}}>Interests</h6>
                    <p className={'text-white'} style={{fontSize: '10px'}}>Habitant morbi tristique senectus et
                        netus. Et tortor at risus viverra adipiscing at in tellus. Non odio euismod lacinia at
                        quis</p>
                </div>
                <div className={'mb-2 socialBtns'}>
                    <AiOutlineTwitter className={'mx-2'}
                                      style={{backgroundColor: "#bababa", borderRadius: '2px', padding: '1px'}}/>
                    <FaFacebookF className={'mx-2'}
                                 style={{backgroundColor: "#bababa", borderRadius: '2px', padding: '1px'}}/>
                    <BsInstagram className={'mx-2'}
                                 style={{backgroundColor: "#bababa", borderRadius: '2px', padding: '1px'}}/>
                    <BsGithub className={'mx-2'}
                              style={{backgroundColor: "#bababa", borderRadius: '2px', padding: '1px'}}/>
                </div>
            </div>
        </div>
    </div>)
}