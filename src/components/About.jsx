export default function About(){
      const text  = "Results-driven Software Developer with 3+ years of experience building scalable, user-centric web and mobile applications. Proficient in modern development frameworks, programming languages, and DevOps practices, with a proven track record of delivering innovative solutions that enhance business performance. Skilled in collaborating across teams using Agile methodologies to achieve project objectives. Currently expanding expertise with certifications in CompTIA Network+, CCNA, and A+."

    return(
        <>
            <section className="about" >
                <div className="picSide"><img src="../../public/test.jpg" alt="" srcset="" /></div>
                <div className="descriptionSide">
                    <div className="aboutMe">{text}</div>
                    <div className="certification">
                        <table>
                          <caption>
                              Certification
                          </caption>
                          <tr>
                            <td>ComptIA Network+ </td>
                            <td>&nbsp;&nbsp;<a href="http://" target="_blank" rel="noopener noreferrer">Badge</a></td>
                          </tr>
                          <tr>
                            <td>IBM Full Stack Develloper </td>
                            <td>&nbsp;&nbsp;<a href="http://" target="_blank" rel="noopener noreferrer">Certificate</a></td>
                          </tr>
                          <tr>
                            <td>CCNA</td>
                            <td>&nbsp;&nbsp;<a href="http://" target="_blank" rel="noopener noreferrer">Badge</a></td>
                          </tr>
                          <tr>
                            <td>ComptIA Security+ </td>
                            <td>&nbsp;&nbsp;<a href="http://" target="_blank" rel="noopener noreferrer">Badge</a></td>
                          </tr>
                          <tr>
                            <td>AZ 104  </td>
                            <td>&nbsp;&nbsp;<a href="http://" target="_blank" rel="noopener noreferrer">Badge</a></td>
                          </tr>
                        </table>
                    </div>
                    <div className="buttonContact">
                         <button className="btn">Let's Connect</button>
                    </div>
                </div>
            </section>
        </>
    )
}