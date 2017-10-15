import React from 'react'
import ReactDOM from 'react-dom'

import '../scss/app.scss'

// JSX is the most common way React markup is written. JSX is a combination of
// JavaScript and XML. It looks a lot like writing HTML with just a few quirks
// to get used to (like `className` and `htmlFor`). It is a very expressive way
// of writing markup, allowing you to express JavaScript directly in your markup.

// I want it to be very clear that JSX is simply syntactic sugar for calls to
// React.createElement. To demonstrate this, I will keep our previous markup
// in place, but commented out.

// const ce = React.createElement

// const ourFirstBasicApp = (
//   ce('div', { className: 'wrap' }, [
//     ce('h1', null, 'React 101'),
//     ce('h2', null, 'by Kyle Shevlin'),
//     ce('article', { className: 'article' }, [
//       ce('p', null, 'How excited are you to be learning React?!'),
//       ce('p', null, 'I know I am excited to be teaching it!')
//     ])
//   ])
// )

const ourFirstBasicApp = (
  <div className="wrap">
    <h1>React 101</h1>
    <h2>by Kyle Shevlin</h2>
    <article className="article">
      <p>How excited are you to be learning React?!</p>
      <p>I know I am excited to be teaching it!</p>
    </article>
  </div>
)

ReactDOM.render(ourFirstBasicApp, document.getElementById('app'))
