import React from 'react';
import Auxiliary from '../hoc/Auxiliary'
import TextBanner from '../components/Layout/TitleBanner/TextBanner'
import Initiative from '../components/Layout/ImageTextBox/Initiative/Initiative'
import ProjectJam from '../assets/images/projectjam.jpg'
import BookClub from '../assets/images/bookclub.png'
import MockInterviews from '../assets/images/mockinterviews.jpg'
import CaseStudies from '../assets/images/casestudies.jpg'
import UpcomingEvent from '../components/Layout/Events/UpcomingEvent'

const Initiatives = () => {
    return (
        <Auxiliary>
            <UpcomingEvent />
            <TextBanner smallHeader='Our Initiatives'>We give our community the resources they need to flourish in Product Management.</TextBanner>
            <Initiative title='Project Jam' image={ProjectJam}>Product Buds Project Jam immmerses you in the collaborative product development process and enhances your project portfolio! 
                Whether you're an aspiring Product Manager (PM) who just stumbled on this field recently or a current PM who's well-versed in many areas of product, this opportunity will 
                allow you to sharpen core business, technical, teamwork, and interpersonal skills with others in the community! </Initiative>
            <Initiative title='Book Club' image={BookClub}>By joining the Product Buds Book Club, you will learn more about topics related but not limited to Product Management, 
                Product Design, and Product Strategy. Your learning will be fostered through discussions about the books we read on the #bookclub Slack channel 
                and virtual discussion sessions with other book club members. </Initiative>
            <Initiative title='Mock Interviews' image={MockInterviews}>The journey of breaking into a Product Management role can feel daunting. The recruitment process is often 
                riddled with imposter syndrome, stress, and uncertainty. Interviewing is a skill and any skill comes with practice. By engaging in mock PM interviews, you get to 
                practice with supportive peers and get the feedback that the recruitment process may not give you. Mock PM interviews allow you to learn how to became better at 
                breaking down complex product questions into smaller pieces to answer them concisely and strategically, improve your communication skills, and boost your self confidence!</Initiative>
            <Initiative title='Product Case Studies' image={CaseStudies}>Product Sense is a skill that is heavily tested and leveraged in PM interviews and jobs. Whether you are an 
                aspiring PM or a current PM, Case Studies will help you grow your product intuition to hone in on the problems that a product solves and how to make those solutions even better. 
                As your product intuition develops and you improve on solving product case studies, you will be able to give cohesive, structured answers in interviews as well as increase your 
                confidence on the job. </Initiative>
        </Auxiliary>
    )
}

export default Initiatives; 