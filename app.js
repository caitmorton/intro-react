  
const Pet = ({name, animal,breed}) => {
  return React.createElement("div", {}, [
     React.createElement("h1", {}, name),
     React.createElement("h2", {}, animal),
     React.createElement("h3", {}, breed)
  ]);
};

const App = () => {
  return React.createElement( "div",  {id: "caitlans_div"}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Toby",
      animal: "Dog",
      breed: "Cockapoo"
    }),
    React.createElement(Pet, {
      name: "Kai",
      animal: "Dog",
      breed: "Rotti"
    }),
    React.createElement(Pet, {
      name: "Boydo",
      animal: "Dog",
      breed: "American Bull" 
    })
  ]);
};
    
ReactDOM.render(React.createElement(App), document.getElementById("root") );
