import React, {useState} from 'react';
import styled from "styled-components";
import Randy from '../../../assets/images/team/randy.jpg'
import Grace from '../../../assets/images/team/grace.jpg'
import Henrika from '../../../assets/images/team/henrika.jpg'
import Joseph from '../../../assets/images/team/joseph.jpg'

const Testimonials = () => {

    const quotes = {
        0: {
            image: {Randy},
            person: "Rommy Shehadeh, Student @ University of Central Florida",
            quote: "When I first discovered product management, I was overwhelmed with all the must-read books for PMs and not knowing where to start. I figured side projects, interview practice, and online articles would be enough. FINALLY sitting down and reading quality books like Cracking the PM Interview and Inspired: How to Create Tech Products People Love on a weekly basis while having a community to discuss ideas & questions has been amazing. Can’t wait to learn more with the next generation of product managers!"
        },
        1: {
            image: {Henrika},
            person: "Hassaan Arif Mustafa, Student @ University of Toronto Missisauga",
            quote: "I just attended my first Product Buds book club meeting. We went over the first few chapters of Cracking the PM Interview and held discussions regarding the myths of Product Management as well as a few other intriguing topics. I would like to thank our moderators for organizing and facilitating our meeting. I am thankful for the opportunity to connect with like-minded individuals from a diverse set of backgrounds, each with their own unique experiences and stories.Looking forward to our next session! Till then!"
        },
        2: {
            image: {Grace},
            person: "Natasha Goel, Student @ University of Illinois",
            quote: "Such a good feeling to finish Cracking the PM Interview and couldn't have done it without this channel holding me accountable. Thank you guys!"
        },
        3: {
            image: {Joseph},
            person: "Joel Montano, PM Intern @ Microsoft",
            quote: "I was part of the first cohort of people joining and it's been a pleasure watching PB flourish. The thing that drew me in was that PB was a young tech community that wasn't gatekept by some SV tech bros, there were normal people like me :). I got the chance to meet with many of the founding team early & they were extremely welcoming and a pleasure to connect with. Being an Influencer™️ isn't exactly my vibe, but I managed to start writing a newsletter in part due to PB and it has created many opportunities for me. As I graduate and transition from intern to full-time, I'm super thankful to have met other peers in the industry who have similar goals and aspirations as I."
        },
    }

    const [currentQuote, setCurrentQuote] = useState(quotes[0])
    
    const [active, setActive] = useState(0)
    
    const buttonClickHandler = (event) => {
        setCurrentQuote(quotes[event.target.getAttribute('data-quote')])
        setActive(event.target.getAttribute('data-quote'))
    }

    const DotContainer = styled.div`
        display: flex;
        justify-content: center;
        padding: 20px;
    `;

    const Dots = styled.span`
        height: 20px;
        width: 20px;
        margin: 0 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
            content: '';
            height: 6px;
            width: 6px;
            background-color: #A3E585;
            border-radius: 50%;
            transition: background-color .3s ease;
        }
    `;

    

    return (
        <div className='Testimonials'>
            <img src={Randy} />
            <div className='QuoteBox'>
                <p className='QuotePadding'>{currentQuote.quote}</p>
                <h3>{currentQuote.person}</h3>
            </div>
            <DotContainer>
                {Object.keys(quotes).map(index => (
                    <Dots
                        onClick={event => buttonClickHandler(event)}
                        data-quote={index}
                        key={index} 
                    />
                    ))}
            </DotContainer>
        </div>
    )
}

export default Testimonials;