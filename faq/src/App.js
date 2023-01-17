import { useState } from 'react'
import './App.css';

function App() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
  }

  setSelected(i)
}

  return (
    <div className="wrapper">
      <div className="body">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content-show' : 'content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
  question: "What is an e-commerce website?",
  answer: "An e-commerce website is an online platform that allows businesses to sell products or services directly to customers through the internet.",
},
{
  question: "How can I make my e-commerce website secure?",
  answer: "There are several ways to make an e-commerce website secure, including using SSL certificates to encrypt sensitive information, implementing strong password policies, and regularly updating software to fix security vulnerabilities.",
},
{
  question: "How can I improve the user experience on my e-commerce website?",
  answer: "Improving the user experience on an e-commerce website can be done by simplifying the navigation, optimizing the site for mobile devices, and providing detailed product information and high-quality images.",
},
{
  question: "How can I increase sales on my e-commerce website?",
  answer: "Increasing sales on an e-commerce website can be achieved by optimizing the site for search engines, running targeted advertising campaigns, and offering promotions and discounts. Additionally, providing excellent customer service and streamlining the checkout process can also help increase sales.",
},
]

export default App;
