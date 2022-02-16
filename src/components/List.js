import React from 'react'

export default function List(props) {

  const handleDel = () => {
    if (window.confirm("Are you sure ?"))
      props.deleteId(props.id)  
  }
  const handleEdite = () => {
    props.editComment (props.id ,props.name , props.comment)
  }

  return (
    <div className=" p-3 mx-auto">
      <div>
        <li className=" d-flex justify-content-star flex-wrap text-light">
          {" "}
          <h5 className="text-secondary mx-2">Name:</h5>{" "}
          <p className="text-black">{props.name}</p>{" "}
        </li>
        <li className=" d-flex justify-content-star">
          {" "}
          <h5 className="text-secondary mx-2">Comment:</h5>{" "}
          <p className="text-black">{props.comment}</p>
        </li>
      </div>
      <div className="d-flex justify-content-star mx-2">
        <button onClick={handleDel} className=" border-secondary rounded-1">
          <i className="far fa-trash-alt text-danger" />
        </button>
        <button
          className=""
          onClick={handleEdite}
          className=" border-secondary rounded-1 ms-2  "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i
            className="far fa-edit text-secondary data-toggle=modal
        data-target=#exampleModal"
          />
        </button>
      </div>
    </div>
  );
}
