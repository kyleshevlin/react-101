import React from 'react'
import ReactDOM from 'react-dom'

import '../scss/app.scss'

/*
Because the markup of React components is entirely function calls,
we can use some interesting techniques to modify these functions,
like memoization, or as I'm about to show you, currying & partial application.

So we don't repeat ourselves so much, we're going to make React.createElement
a curried function. That means we will change it from a function that takes several
arguments, to a series of several functions that each take one argument. Given the same
arguments, they will return identical results, but currying will allow us to partially
apply values, baking in arguments that aren't used until all arguments are received.

For example, the parapgraphs below have the same first two arguments, let's tidy
this up a bit.
*/

const ce = React.createElement

const curriedCe = tag => props => children => ce(tag, props, children)

const p = curriedCe('p')(null)

const ourFirstBasicApp = (
  ce('div', { className: 'wrap' }, [
    ce('h1', null, 'React 101'),
    ce('h2', null, 'by Kyle Shevlin'),
    ce('article', { className: 'article' }, [
      p('How excited are you to be learning React?!'),
      p('I know I am excited to be teaching it!')
    ])
  ])
)

/*
You can imagine creating all sorts of partially applied functions
to build your app this way. But most React apps do not use React.createElement
this way. Instead, they use JSX, a syntactic sugar for React.createElement calls.
We'll start using JSX in the next commit, but it was impprtant to understand
what its doing under the hood before we started using it.
*/

ReactDOM.render(ourFirstBasicApp, document.getElementById('app'))
