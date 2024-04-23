import React from 'react'

const Cartcontent = ({item}) => {
    console.log(item);
  return (
    <>
    <div className="card-content">
          <div className="card-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="content">
            <div className="card-title"><h4>{item.title}</h4></div>
            <div className="card-text">{item.content}</div>
          </div>
          <div className="view-date">
            <div className="view"><i class="fa-regular fa-eye"></i>{item.view}</div>
            <div className="date">{item.date}</div>
          </div>
        </div>
    </>
  )
}

export default Cartcontent