import React from 'react'

import DATES from '../config/dates'
import RECRUITMENT from '../config/recruitment'

const RecruitmentSection = ({ type }) => {
  const dates = DATES[type]
  const recruitment = RECRUITMENT[type]
  return (
    <section>
      <h2>Recruitment Process</h2>
      <br />
      <div className="grid">
        {recruitment.map(s => {
          const { step, name, description } = s

          return (
            <div key={step} className="step">
              <div className="container-row">
                <div className="number-container">
                  <div className="number">{step}</div>
                </div>
                <div className="text-container">
                  <h3 className="name">{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <h2>Fall 2018 Recruitment Dates</h2>
      <br />
      <div className="grid">
        {dates.map(d => {
          const { name, date } = d

          return (
            <div key={name} className="date">
              <h3 className="name">{name}</h3>
              <h5>{date}</h5>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default RecruitmentSection
