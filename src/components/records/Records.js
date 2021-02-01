import React from 'react'
import './records.css'

function Records({records, loading}) {

  if (loading) {
    return <h2>Loading...</h2>
  }
  return(
    <table className="records" cellPadding={0} cellSpacing={0}>
      <thead className="records-container">
        <tr className="records-header">
            <td className="records-header-item">First Name</td>
            <td className="records-header-item">Last Name</td>
            <td className="records-header-item">Gender</td>
            <td className="records-header-item">Latitude</td>
            <td className="records-header-item">Longitude</td>
            <td className="records-header-item">Credit Card No.</td>
            <td className="records-header-item">Card Type</td>
            <td className="records-header-item">Email</td>
            <td className="records-header-item">Domain Name</td>
            <td className="records-header-item">Telephone</td>
            <td className="records-header-item">MacAddress</td>
            <td className="records-header-item">URL</td>
            <td className="records-header-item">Username</td>
            <td className="records-header-item">Last Login</td>
            <td className="records-header-item">Payment Method</td>
        </tr>
      </thead>
        <tbody>
         
          {records.map((record, i) => {
            return ( 
              <tr key={i} className="records-body">
                <td className="record-item">{record.FirstName}</td>
                <td className="record-item">{record.LastName}</td>
                <td className="record-item">{record.Gender}</td>
                <td className="record-item">{record.Latitude}</td>
                <td className="record-item">{record.Longitude}</td>
                <td className="record-item">{record.CreditCardNumber}</td>
                <td className="record-item">{record.CreditCardType}</td>
                <td className="record-item">{record.Email}</td>
                <td className="record-item">{record.DomainName}</td>
                <td className="record-item">{record.PhoneNumber}</td>
                <td className="record-item">{record.MacAddress}</td>
                <td className="record-item">{record.URL}</td>
                <td className="record-item">{record.UserName}</td>
                <td className="record-item">{record.LastLogin}</td>
                <td className="record-item">{record.PaymentMethod}</td>
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}

export default Records;