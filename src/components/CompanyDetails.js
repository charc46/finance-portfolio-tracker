import React, { useState, useEffect} from 'react'
import axios from 'axios'

const CompanyDetails = ({symbol}) => {
  const [company, setCompany] = useState({})

  useEffect(() => {
    const url = `https://sandbox.iexapis.com/stable/stock/${symbol}/company?`;
    const getCompanyDetails = async () => {
      const { data } = await axios.get(url, {
        params: {
          token: 'Tpk_08b5a20b77b74bce8c14e491f5bc75f1'
        }
      })
    setCompany(data);
    }

    getCompanyDetails();
  }, [])

  return (
    <div>
      <p>Industry: {company.industry}</p>
      <p>Description: {company.description}</p>
      <p>CEO: {company.CEO}</p>
      <p>Sector: {company.sector}</p>
      <a href={company.website}>Website: {company.website}</a>
    </div>
  )
}

export default CompanyDetails
