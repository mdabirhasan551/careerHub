import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "rgba(152, 115, 255, 0.2)" }}
      >
        <h1 className="mt-5 pt-5 mb-5 pb-5">Blogs</h1>
      </div>
      <Container className="m-5">
        <Row>
          <Col>
            <div>
              <h3>1. When we use context API?</h3>
              <p>
                Answer: The Context API in React is typically used when you have
                data that needs to be accessible by many components at different
                nesting levels in your application. It helps avoid prop
                drilling, where you pass data through multiple levels of
                components. By using the Context API, you can provide a way to
                share values like themes, language preferences, or
                authentication status across your components without having to
                explicitly pass props down manually at every level. So, whenever
                you find yourself passing props down multiple levels in your
                component tree, and those props are used by many components,
                consider using the Context API to manage and share that data
                more efficiently.
              </p>
            </div>
            <div>
              <h3>2. What is react custom hook?</h3>
              <p>
                Answer: A React custom hook is a JavaScript function that allows
                you to extract and reuse stateful logic from a component. Custom
                hooks are a powerful feature in React that enable you to create
                reusable logic that can be shared across multiple components.
                When you create a custom hook, you're essentially encapsulating
                logic that can manage state, perform side effects, or provide
                utilities. This logic can then be reused across different
                components in your application. Custom hooks follow a naming
                convention of starting with "use" to indicate that they are
                hooks. For example, you might create a custom hook called
                useFetch to handle data fetching, or useLocalStorage to interact
                with browser's local storage. By creating custom hooks, you can
                keep your components clean and focused on rendering UI, while
                abstracting away complex logic into reusable functions. This
                promotes code reuse, maintainability, and readability in your
                React applications.
              </p>
            </div>
            <div>
              <h3>3. What is useRef and useMemo?</h3>
              <p>
                Answer: 'useRef' and 'useMemo' are both hooks provided by React
                that serve different purposes in managing state and performance
                optimization. 'useRef' is used to create a mutable object whose
                current value can be accessed across renders without causing the
                component to re-render. This is particularly useful for
                accessing and manipulating DOM elements directly, or for
                persisting values across renders without triggering re-renders.
                For example, you can use 'useRef' to store a reference to a DOM
                element and then access its properties or methods without
                causing the component to re-render. On the other hand, 'useMemo'
                is used for memoizing expensive computations so that they are
                only re-computed when their dependencies change. It takes a
                function and an array of dependencies, and returns a memoized
                value. The function passed to 'useMemo' is only re-executed when
                one of the dependencies has changed since the last render. This
                can be helpful for optimizing performance by avoiding
                unnecessary re-computations of values that haven't changed. In
                summary, 'useRef' is primarily used for accessing and
                manipulating mutable values across renders, while 'useMemo' is
                used for memoizing expensive computations to optimize
                performance
              </p>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
