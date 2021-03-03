import { useEffect, useState } from "react";


export default function ListElement({contact, setSelected, isSelected}) {
    return (
        <li className="list-group-item d-flex align-items-center" onClick={() => setSelected(!isSelected, contact.id)}>
           {contact.avatar === null ? <div className="avatar"></div> : <img src={contact.avatar}  className="text-secondary w-100 rounded-circle avatar" /> }
            <span className="ml-2">{contact.first_name}&nbsp;</span>
            <span className="mr-2">{contact.last_name}</span>
            <input type="checkbox" checked={isSelected} onChange={() => {}} className="ml-auto"/>
        </li>
    )
}