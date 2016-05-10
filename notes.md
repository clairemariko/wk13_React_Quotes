Research:

React only covers View Layers of the app so you still need to choose other technologies.

Nested Elements:
If you want to return more elements, you need to wrap it with a CONTAINER. We use <div> as a wrapper


JS EXPRESSIONS
JS can be used {}

You cant use IF/ELSE Statements but you can use Conditionals(ternary)

HTML components are regular React components but 1 diff. the JSX compiler will auto re-write HTML tags to [React.createElement(tagName)]

Reactive State:
[props] are immutable: they are passed from the parent and are 'owned' by the parent.
To implement interaction, you have to into mutable STATE to the component. 
THIS.STATE is private to the component
THIS.SETSTATE() allows you to change it

When the state updates it re-renders itself. 