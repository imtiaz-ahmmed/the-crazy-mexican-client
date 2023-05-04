import React, { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

const Blog = () => {
  const pdfRef = useRef();

  const handleDownloadPdf = () => {
    pdfRef.current.save();
  };

  return (
    <div>
      <button
        className="text-center text-white rounded-lg mt-4 mx-8 bg-yellow-700 p-4"
        onClick={handleDownloadPdf}
      >
        Download PDF
      </button>
      <PDFExport ref={pdfRef}>
        <div className="bg-slate-100 p-12 mb-8 rounded-lg mx-8 mt-8">
          <h2 className="text-yellow-700 text-4xl font-bold mb-4">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p className="text-justify">
            Controlled components are those that are managed and controlled by
            the software system itself. These components are typically
            programmed to behave in a specific way and follow a certain set of
            rules and guidelines set by the system. Examples of controlled
            components include built-in libraries, frameworks, and APIs. <br />{" "}
            Uncontrolled components, on the other hand, are those that are not
            managed or controlled by the software system itself. These
            components may be external libraries, third-party APIs, or
            user-generated code. Since they are not under the direct control of
            the software system, uncontrolled components may have unexpected
            behavior or introduce security vulnerabilities if not used
            correctly.
          </p>
        </div>
        <div className="bg-slate-100 p-12 mb-8 rounded-lg mx-8">
          <h2 className="text-yellow-700 text-4xl font-bold mb-4">
            How to validate React props using PropTypes
          </h2>
          <p className="text-justify">
            React is a JavaScript library used for building user interfaces, and
            it provides a way to validate component props using PropTypes.
            PropTypes is a typechecking library that allows developers to define
            the expected data types and values of component props. To use
            PropTypes in a React component, first need to import it from the
            'prop-types' package.Then,define the expected PropTypes for the
            component by adding a 'propTypes' property to the component's class
            definition:
          </p>
        </div>
        <div className="bg-slate-100 p-12 mb-8 rounded-lg mx-8">
          <h2 className="text-yellow-700 text-4xl font-bold mb-4">
            Tell us the difference between nodejs and express js.
          </h2>
          <p className="text-justify">
            Node.js is a runtime environment that allows developers to run
            JavaScript code outside of a web browser. It provides an environment
            for running JavaScript on the server-side, allowing developers to
            write server-side applications using JavaScript. Node.js is built on
            top of the V8 JavaScript engine, which is the same engine used by
            the Google Chrome browser. <br />
            Express.js, on the other hand, is a web application framework built
            on top of Node.js. It provides a set of tools and utilities for
            building web applications, including features like routing,
            middleware, and templates. Express.js simplifies the process of
            building server-side applications by providing a set of pre-built
            tools and conventions for structuring application.
          </p>
        </div>
        <div className="bg-slate-100 p-12 mb-8 rounded-lg mx-8">
          <h2 className="text-yellow-700 text-4xl font-bold mb-4">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="text-justify">
            Custom hooks are created to promote code reuse and better
            organization of code. They provide a way to extract logic that is
            common across multiple components into a reusable function, making
            it easier to maintain and refactor code. Custom hooks can also help
            reduce code duplication and make it easier to test code. Custom
            hooks are named using the "use" prefix, as React hooks are named
            with the same convention.
          </p>
        </div>
      </PDFExport>
    </div>
  );
};

export default Blog;
