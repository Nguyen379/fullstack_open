const Header = ({ name }) => <h2>{name}</h2>;

const Total = ({ parts }) => {
	const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
	return <p style={{ fontWeight: "bold" }}>total of {sum} exercises</p>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return parts.map((part) => <Part key={part.id} part={part} />);
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default Course;
