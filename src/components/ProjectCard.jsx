import '../styles/CertificateCard.css'
function ProjectCard(props) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 p-2">
                <div className='cardProject'>
                    <h3 className='text-center'>{props.name}</h3>
                    <div className="d-flex flex-row justify-content-center">
                        <img 
                            src={props.imageUrl} 
                            className="imageSettings"
                        />
                    </div>
                    <p>{props.textInfo}</p>
                    <p className='text-end'>{props.dateInfo}</p>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;