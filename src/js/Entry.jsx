import React from 'react'
import ReactDOM from 'react-dom'

import '../scss/app.scss'

/*
In this example, we take React.createElement a bit further and build a small UI.

Since we use the method so often, we assign to a shorter alias `ce`.

We can easily see how our applications are built out of functions. We'll see
how we can take this a step further in the next commit.
*/

const ce = React.createElement

const ourFirstBasicApp = (
  ce('div', { className: 'wrap' }, [
    ce('h1', null, 'React 101'),
    ce('h2', null, 'by Kyle Shevlin'),
    ce('article', { className: 'article' }, [
      ce('p', null, 'How excited are you to be learning React?!'),
      ce('p', null, 'I know I am excited to be teaching it!')
    ])
  ])
)

ReactDOM.render(ourFirstBasicApp, document.getElementById('app'))
