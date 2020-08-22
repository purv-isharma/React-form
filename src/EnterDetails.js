import React from "react";
import ShowDetails from "./ShowDetails";

class EnterDetails extends React.Component {
  state = {
    id: 1,
    name: "",
    mobile: "",
    date: "",
    email: "",
    detailsArray: [],
    isEditing: false,
    editId: ""
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addDetails = (event) => {
    event.preventDefault();
    this.setState({
      id: this.state.id + 1,
      detailsArray: [
        ...this.state.detailsArray,
        {
          id: this.state.id,
          name: this.state.name,
          mobile: this.state.mobile,
          email: this.state.email,
          date: this.state.date
        }
      ],
      name: "",
      mobile: "",
      email: "",
      date: ""
    });
  };

  deleteEntry = (id) => {
    console.log(id);
    const newDetails = this.state.detailsArray.filter(
      (detail) => detail.id !== id
    );
    this.setState({
      detailsArray: newDetails
    });
  };

  editEntry = (id) => {
    const tempArray = this.state.detailsArray.find((task) => task.id === id); // do not use filter as it will return array and its attributes will not be accessible by . operator
    this.setState({
      isEditing: true,
      editId: id,
      name: tempArray.name,
      email: tempArray.email,
      mobile: tempArray.mobile,
      date: tempArray.date
    });
    // console.log("edited values extracted", tempArray);
  };

  updateEntry = (event) => {
    event.preventDefault();
    const temp = this.state.detailsArray;
    const index = this.state.detailsArray.findIndex(
      (task) => task.id === this.state.editId
    );

    console.log("index", index);

    temp[index] = {
      // [] are not needed as the object is already there
      ...temp[index],

      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
      date: this.state.date
    };

    console.log("updates values", temp);

    this.setState({
      detailsArray: temp,
      isEditing: false,
      editId: "",
      name: "",
      mobile: "",
      date: "",
      email: ""
    });

    console.log("updated fields", this.state.detailsArray);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form
          onSubmit={this.state.isEditing ? this.updateEntry : this.addDetails}
        >
          <input
            name="name"
            value={this.state.name}
            type="text"
            placeholder="Enter ur name ..."
            onChange={this.handleInput}
            required
          />
          <input
            name="mobile"
            value={this.state.mobile}
            type="number"
            onChange={this.handleInput}
            required
          />
          <input
            name="date"
            value={this.state.date}
            type="date"
            onChange={this.handleInput}
            required
          />
          <input
            name="email"
            value={this.state.email}
            type="email"
            placeholder="enter ur email id"
            onChange={this.handleInput}
            required
          />
          <button type="submit">
            {this.state.isEditing
              ? "Update the details ..."
              : "Submit the details"}{" "}
          </button>
        </form>
        <ShowDetails
          detailsArray={this.state.detailsArray}
          deleteEntry={this.deleteEntry}
          editEntry={this.editEntry}
        />
      </div>
    );
  }
}

export default EnterDetails;
