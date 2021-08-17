import PropTypes from 'prop-types';

function ProjectList({ tovars }) {
  return tovars.map((tovar, id) => {
    return (
      <li className = "tovar filtered" data-category={tovar.category} key={id}>
        <img src={tovar.img} alt="tovar_img" />
      </li>
    );
  });
}

ProjectList.propTypes = {
  tovars: PropTypes.array
}

export default ProjectList;