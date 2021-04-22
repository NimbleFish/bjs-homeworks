import React from "react";

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.tovars.map((tovar, id) => {
      return (
        <li className = "tovar filtered" data-category={tovar.category} key={id}>
          <img src={tovar.img} alt="tovar_img" />
        </li>
      );
    });
  }
}

export default ProjectList;