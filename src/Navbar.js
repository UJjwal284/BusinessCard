function Navbar() {
    return (
        <div>
            <div className={'nav navbar'} style={{backgroundColor: '#192437'}}>
                <h2 className={'mx-3 my-1'} style={{color: '#71d3f4'}}>ReactJS Learning</h2>
                <div className={'d-flex'}>
                    <h5 className={'mb-0 me-3'} style={{color: "white"}}>Pricing</h5>
                    <h5 className={'mb-0 me-3'} style={{color: "white"}}>About</h5>
                    <h5 className={'mb-0 me-3'} style={{color: "white"}}>Contact</h5>
                </div>
            </div>
        </div>
    );
}

export default Navbar;