ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
//ReactDOM.render(<p>my frist react calass</p>, document.getElementById("root"));
//ReactDOM.render( <ul><li>Thing 1</li><li>Thing 2</li></ul>, document.getElementById("root"))

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

/*Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

ReactDOM.render(navbar, document.getElementById("root"));

ReactDOM.render(
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
