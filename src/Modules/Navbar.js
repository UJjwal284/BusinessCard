import logo from '../logo512.png'

function Navbar() {
    return (
        <div className={'nav navbar'} style={{backgroundColor: '#192437'}}>
            <img src={logo} width={50} className={'ms-2'} alt={'logo'}/>
            <h2 className={'my-1 me-auto ms-2'} style={{color: '#71d3f4'}}>ReactJS Learning</h2>
            <div className={'d-flex'}>
                <h5 className={'mb-0 me-3'} style={{color: "white"}}>Pricing</h5>
                <h5 className={'mb-0 me-3'} style={{color: "white"}}>About</h5>
                <h5 className={'mb-0 me-3'} style={{color: "white"}}>Contact</h5>
            </div>
        </div>
    );
}

export default Navbar;