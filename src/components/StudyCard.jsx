import '../styles/StudyCard.css'

function StudyCard(props) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 p-2">
                <div className="cardEducation">
                    <div class="d-flex flex-row justify-content-center">
                        <img 
                            src={props.logoUrl} 
                            className="logoSettings"
                        />
                    </div>
                    <h4 className="schoolNameHeading text-center pt-1">{props.schoolName}</h4>
                    <p className="timePeriodSettings text-center">{props.timePeriod}</p>
                    <p className="aboutSchoolSettings">{props.aboutSchool}</p>
                </div>
            </div>
        </>
    )
}
export default StudyCard;