import React from 'react';
import Auxiliary from '../hoc/Auxiliary'
import TextBanner from '../components/Layout/TitleBanner/TextBanner'
import Initiative from '../components/Layout/ImageTextBox/Initiative/Initiative'
import ProjectJam from '../assets/images/projectjam.jpg'
import BookClub from '../assets/images/bookclub.png'
import MockInterviews from '../assets/images/mockinterviews.jpg'
import CaseStudies from '../assets/images/casestudies.jpg'

const Initiatives = () => {
    return (
        <Auxiliary>
            <div className='MainContent'>
                <TextBanner smallHeader='Our Initiatives'>We give our community the resources they need to break into product management.</TextBanner>
            </div>
            <Initiative title='Project Jam' image={ProjectJam}>The Product Buds Project Jam enables you to work on collaborative projects, immerse you in the product development process, 
                and allows you to enhance your project portfolio! Whether you're an aspiring Product Manager (PM) who just stumbled 
                on this field recently or a current PM who's well-versed in many areas of Product, this opportunity will allow you to sharpen 
                core business, technical, teamwork, and interpersonal with others in the community! 😇</Initiative>
            <Initiative title='Book Club' image={BookClub}>From joining the Product Buds Book Club, we hope you will learn more about topics related but not limited to Product Management,
                Product Design, and Product Strategy. Your learning will be fostered through discussions about the books we read on the #bookclub Slack channel and virtual 
                discussion sessions among book club members via Zoom. </Initiative>
            <Initiative title='Mock Interviews' image={MockInterviews}>For aspiring Product Managers, the journey of breaking into a Product Management role can feeling daunting. The recruitment 
                process is often riddled with feelings of imposter syndrome, stress, and uncertainty. But many of these feelings can be alleviated if you do mock PM interviews. 
                Mock PM interviews allow you to learn how to became better at breaking down complex product questions into smaller pieces to answer them concisely and 
                strategically, improve your communication skills, and boost your self confidence! </Initiative>
            <Initiative title='Product Case Studies' image={CaseStudies}>Solving product case studies cultivates Product Sense, a skill that is heavily tested and leveraged in PM interviews and 
                jobs. Whether you are an aspiring PM or a current PM, case studies will help you grow your product intuition. As your product intuition develops and you improve 
                on solving product case studies, you will be able to give a cohesive answer in PM interviews and increase your confidence on the job. </Initiative>
        </Auxiliary>
    )
}

export default Initiatives; 