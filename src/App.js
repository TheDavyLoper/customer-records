import React, { Component } from 'react'
import './App.css';
import Header from './components/header/Header';
import Records from './components/records/Records';
import Pagination from './components/pagination/Pagination';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      search: '',
      records: [],
      loading: false,
      currentPage: 1,
      recordsPerPage: 20
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    const fetchRecords = () => {
      fetch('https://api.enye.tech/v1/challenge/records')
      .then(res => res.json())
      .then(data => this.setState({
        records: data.records.profiles,
        loading: false
      }))
    }
    fetchRecords()
  }

  
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  filter = (rows) => {
    return rows.filter((row) =>
      row.Gender.toString().toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1 || row.PaymentMethod.toString().toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1)
  }

  handleSearch = rows => {
    // console.log('Searching...')
    const columns = rows[0] && Object.keys(rows[0])
    // return rows.filter(row => row.FirstName.toLowerCase().indexOf(this.state.search) > -1)
    return rows.filter((row) => columns.some((column) => row[column].toString().toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1))
  }

  paginate = (pageNumbers) => {
    this.setState({
    currentPage: pageNumbers
  })}

  //get current records
  
  render() {  
    // get current records
    const indexOfLastRecord = this.state.currentPage * this.state.recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - this.state.recordsPerPage
    const currentPage = this.state.records.slice(indexOfFirstRecord, indexOfLastRecord)


    return (
      <div className="App">
        <Header 
          handleChange={this.handleChange} 
          state={this.state} 
          handleSearch={this.handleSearch}
        />
        <Records 
          records={this.handleSearch(this.filter(currentPage))}
          loading={this.state.loading}
        />
        <Pagination 
          recordsPerPage={this.state.recordsPerPage}
          totalRecords ={this.state.records.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
} 

export default App;
