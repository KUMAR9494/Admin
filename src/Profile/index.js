import { Component } from "react";
import ProfileItem from "../ProfileItem";
import "./index.css";

class Profile extends Component {
  state = { inputForm: "", profilesList: [] };

  componentDidMount() {
    this.getProfileData();
  }

  deleteId = (id) => {
    const { profilesList } = this.state;
    const DeletedData = profilesList.filter((each) => {
      return each.id !== id;
    });
    this.setState({ profilesList: DeletedData });
  };

  getProfileData = async () => {
    let options = {
      method: "GET"
    };

    const response = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
      options
    );
    const data = await response.json();
    this.setState({ profilesList: data });
  };

  inputChanged = (event) => {
    this.setState({ inputForm: event.target.value });
  };

  render() {
    const { inputForm, profilesList } = this.state;
    const FilteredData = profilesList.filter((each) => {
      return each.name.toLowerCase().includes(inputForm);
    });
    return (
      <div className="bgContainer">
        <h1>Profile Items</h1>
        <div className="df">
          <label htmlFor="user">search User</label>
          <input type="search" value={inputForm} onChange={this.inputChanged} />
        </div>
        <ul className="bgListItemContainer">
          <div class="display">
            <p>Name</p>
            <p>Email</p>
            <p>option</p>
          </div>
          {FilteredData.map((each) => {
            return (
              <ProfileItem
                deleteId={this.deleteId}
                details={each}
                key={each.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Profile;
