import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './HomeMainbar.css'
import Questions from './Questions'
import QuestionList from './QuestionList'
    
const HomeMainbar = () => {

  const user = 12;  
  const navigate = useNavigate() 
  const location = useLocation()

  const questionsList = useSelector(state => state.questionsReducer)
  

	// const questionsList = [
	// 	{
	// 		_id: 1,
	// 		upVotes: 3,
	// 		downVotes: 1,
	// 		noOfAnswers: 2,
	// 		questionTitle: "what is a function?",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["java", "nodejs", "python", "reactjs", "mongodb"],
	// 		userPosted: "bhav",
	// 		userId: 1,
	// 		askedOn: "jan 1",
	// 		answer: [
	// 			{
	// 				answerBody: "Answer",
	// 				userAnswered: "bhav",
	// 				answeredOn: "jan 2",
	// 				userId: 2,
	// 			},
	// 		],
	// 	},
	// 	{
	// 		_id: 2,
	// 		upVotes: 3,
	// 		downVotes: 5,
	// 		noOfAnswers: 0,
	// 		questionTitle: "what is a function?",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["javascript", "R", "python"],
	// 		userPosted: "bhav",
	// 		userId: 1,
	// 		askedOn: "jan 1",
	// 		answer: [
	// 			{
	// 				answerBody: "Answer",
	// 				userAnswered: "bhav",
	// 				answeredOn: "jan 2",
	// 				userId: 2,
	// 			},
	// 		],
	// 	},
	// 	{
	// 		_id: 3,
	// 		upVotes: 1,
	// 		downVotes: 0,
	// 		noOfAnswers: 0,
	// 		questionTitle: "what is a function?",
	// 		questionBody: "It meant to be",
	// 		questionTags: ["javascript", "R", "python"],
	// 		userPosted: "bhav",
	// 		userId: 2,
	// 		askedOn: "jan 1",
	// 		answer: [
	// 			{
	// 				answerBody: "Answer",
	// 				userAnswered: "bhav",
	// 				answeredOn: "jan 2",
	// 				userId: 3,
	// 			},
	// 		],
	// 	},
	// ];

	const checkAuth = () => {
		if (user === null) {
			alert("Login or Signup to Ask a Question");
			navigate("/Auth");
		} else {
			navigate("/AskQuestion");
		}
	};

	return (
		<div className="main-bar">
			<div className="main-bar-header">
				{location.pathname === "/" ? (
					<h1>Top Questions</h1>
				) : (
					<h1>All Questions</h1>
				)}
				<button onClick={checkAuth} className="ask-btn">
					Ask Question
				</button>
			</div>
			<div>
				{questionsList.data === null ? (
					<h1>Loading...</h1>
				) : (
					<>
						<p>{questionsList.data.length} questions</p>
						<QuestionList questionsList={questionsList.data} />
					</>
				)}
			</div>
		</div>
	);
};

export default HomeMainbar;
