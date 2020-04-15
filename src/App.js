import React from "react";
import "./App.css";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./api/index";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
    console.log(fetchedData);
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker onChange={this.handleChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default App;
