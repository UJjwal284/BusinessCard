import {BsTelephoneFill} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";

export default function ContactCard(details) {
    return (
        <>
            {details.details.map(user =>
                <div key={user.name + user.phone}>
                    <div className={'contacts-card my-5 mx-auto'}>
                        <img src={user.image} style={{borderRadius: 7}} alt={'PP'}/>
                        <h5 className={'fw-bold mt-2 text-start'}>{user.name}</h5>
                        <div className={'d-flex mt-3'}>
                            <BsTelephoneFill style={{padding: 1, marginTop: 3}}/>
                            <p className={'mb-0 ms-2'} style={{fontSize: 14}}>{user.phone}</p>
                        </div>
                        <div className={'d-flex text-start'}>
                            <AiFillMail style={{padding: 1, marginTop: 3}}/>
                            <p className={'mb-0 ms-2 overflow-hidden'}
                               style={{fontSize: 14, width: 175}}>{user.email}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}