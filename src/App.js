import React from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/logo.jpg";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <div className={styles.logo}>
          <img/>
          <img/>
          <img/>
          <img/>
        </div>
        <br />
        <text>
          <b>Website Data Kasus  Corona Virus Dunia</b>
        </text>
        <br />
        <text>
          <i>(Pilih Negara yang ingin di cek, di Pilihan Negara dibawah ini)</i>
        </text>
        <p>Website ini di buat untuk memudahkan rakyat indonesia dalam mengecek data covid dunia dan negara</p>
        <br />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Cards data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;

// import React, { useState, useEffect } from "react";
// import { Cards, CountryPicker, Chart } from "./Components";
// import { fetchData } from "./api/";
// import styles from "./App.module.css";
// import Footer from "./Components/Footer/Footer";
// import image from "./images/image.png";

// const App = () => {
//   const [data, setData] = useState({});
//   const [country, setCountry] = useState();

//   const handleCountryChange = async (country) => {
//     const data = await fetchData(country);
//     setCountry(country);
//     setData(data);
//   };

//   useEffect(() => {
//     async function loadData() {
//       const data = await fetchData();
//       setData({ data });
//     }
//     loadData();
//   }, []);

//   console.log(data);

//   return (
//     <div className={styles.container}>
//       <img className={styles.image} src={image} alt="COVID-19" />
//       <br />
//       <text>
//         <b>Global and Country Wise Cases of Corona Virus</b>
//       </text>
//       <br />
//       <text>
//         <i>(For a Particlar select a Country from below)</i>
//       </text>
//       <br />
//       <br />
//       <Cards data={data} country={country} />
//       <CountryPicker handleCountryChange={handleCountryChange} />
//       <Chart data={data} country={country} />
//       <Footer />
//     </div>
//   );
// };

// export default App;
