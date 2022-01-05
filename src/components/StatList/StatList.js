import PropTypes from "prop-types";

export default function StatList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map((stat) => (
        <li className="stat">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
