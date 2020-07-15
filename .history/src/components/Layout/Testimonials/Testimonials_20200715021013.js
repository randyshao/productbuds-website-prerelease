import React, {useState} from 'react';

const Testimonials = () => {

    const quotes = {
        0: {
            person: "Rommy Shehadeh, Student @ University of Central Florida",
            quote: "When I first discovered product management, I was overwhelmed with all the must-read books for PMs and not knowing where to start. I figured side projects, interview practice, and online articles would be enough. FINALLY sitting down and reading quality books like Cracking the PM Interview and Inspired: How to Create Tech Products People Love on a weekly basis while having a community to discuss ideas & questions has been amazing. Can’t wait to learn more with the next generation of product managers!"
        },
        1: {
            person: "Hassaan Arif Mustafa, Student @ University of Toronto Missisauga",
            quote: "I just attended my first Product Buds book club meeting. We went over the first few chapters of Cracking the PM Interview and held discussions regarding the myths of Product Management as well as a few other intriguing topics. I would like to thank our moderators for organizing and facilitating our meeting. I am thankful for the opportunity to connect with like-minded individuals from a diverse set of backgrounds, each with their own unique experiences and stories.Looking forward to our next session! Till then!"
        },
        2: {
            person: "Natasha Goel, Student @ University of Illinois",
            quote: "Such a good feeling to finish Cracking the PM Interview and couldn't have done it without this channel holding me accountable. Thank you guys!"
        },
        3: {
            person: "Nicole O’Keefe, Marketing Consultant @ Bluefield Technologies",
            quote: "Yesterday was a day filled with learning, as I attended the first Product Buds “Project Jam Workshop.” Three awesome professionals Adil Chaudhry, Tushar Gupta, and Temi Moju-Igbene, presented their thoughts on creating effective prototypes."
        },
    }

    const [currentQuote, setCurrentQuote] = useState(quotes[0])
    
    const [active, setActive] = useState(0)
    
    const buttonClickHandler = (event) => {
        setCurrentQuote(quotes[event.target.getAttribute('data-quote')])
        setActive(event.target.getAttribute('data-quote'))
    }

    return (
        <div className='Testimonials'>
            <div className='QuoteBox'>
                <p className='QuotePadding'>{currentQuote.quote}</p>
                <h3>{currentQuote.person}</h3>
            </div>
            <div className='QuoteNav'>
                {Object.keys(quotes).map(index => (
                    <span
                    onClick={event => buttonClickHandler(event)}
                    data-quote={index}
                    key={index} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonials;