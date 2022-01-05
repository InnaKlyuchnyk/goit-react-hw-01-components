import PropTypes from "prop-types";

export default function Section({ title }) {
  return <Section>{title && '<h2 class="title">{title}</h2>'}</Section>;
}

Section.propTypes = {
  title: PropTypes.string,
};
