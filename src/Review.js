import {React,useState} from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './Review.css'
import reviews from './data'
function Review() {
    const [index, setIndex] = useState(0)
    const [readMore,setReadMore] = useState(false)
    const { name, job, image, text } = reviews[index]
    // This function checks if the index is at the beginning of the array or at the end
    function checkIndex(index) {
        let newIndex
        if (index < 0) {
            newIndex = reviews.length - 1;
        }
        else if (index > reviews.length - 1) {
            newIndex = 0
        }
        else {
            newIndex = index;
        }
        return newIndex;
        
    }
    function nextReview() {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex)
        })
    }
    function prevReview() {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex)
        })
    }
    function randomIndex() {
        setIndex(() => {
            let rand = Math.floor(Math.random() * reviews.length)
            if (rand === index) {
                rand = index + 1;
            }
            return checkIndex(rand);
        })
    }
    function showMore() {
        setReadMore(!readMore)
    }
    return (
        <div className="review">
            <div className="review-image-container" >
                <img className="review-image" src={image} alt="" />
                <span className="icon-quote"><FaQuoteRight/></span>
            </div>
            <div className="review-info">
                < h4 className="person-name">{ name}</h4>
                <p className="person-role">{ job}</p>
                <p className="review-content">{readMore?text:`${text.substr(0,160)}...`}
                    <button className="readmore" onClick={showMore}>{ readMore?'Show less':'Show more'}</button></p>
            </div>
            <div className="button-container">
                <button className="prev-btn" onClick={prevReview}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextReview}>
                    <FaChevronRight/>
                </button>
            </div>
            <div className="rand-btn-container">
                 <button className="rand-btn" onClick={randomIndex}>Suprise me!</button>
            </div>
            
            
        </div>
    )
}

export default Review
