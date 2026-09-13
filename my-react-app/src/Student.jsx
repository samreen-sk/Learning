import PropTypes from 'prop-types';

function Student({
    name = "guest",
    age = 0,
    student = false
}) {
    return (
        <>
            <div className="student">
                <p>Name : {name}</p>
                <p>Age : {age}</p>
                <p>Student : {student ? "YES" : "NO"}</p>
            </div>
        </>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool
};

export default Student;