import React from "react";
import "./styles.css";

class ShowDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>Details Submitted</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Date of Birth</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.detailsArray.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.name}</td>
                  <td>{task.email}</td>
                  <td>{task.mobile}</td>
                  <td>{task.date}</td>
                  <td>
                    <button onClick={() => this.props.deleteEntry(task.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.props.editEntry(task.id)}>
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowDetails;
