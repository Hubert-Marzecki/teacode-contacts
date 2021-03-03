import { useEffect, useState } from "react";
import ListElement from "./ListElement";
import "./list.css";

export default function List({ items }) {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [visibleContacts, setVisibleContantacts] = useState(items);
  const [search, setSearch] = useState("");

  const sortedItems = items.sort((a, b) =>
    a.last_name.localeCompare(b.last_name)
  );

  useEffect(() => {
    console.log("effect", selectedContacts);
  }, [selectedContacts]);

  useEffect(() => {
    setVisibleContantacts((s) => {
      return sortedItems.filter((item) => {
        return (
          search === "" ||
          item.first_name.toLowerCase().includes(search.toLowerCase()) ||
          item.last_name.toLowerCase().includes(search.toLowerCase())
        );
      });
    });
  }, [search]);

  const setSelected = (isSelected, id) => {
    const updateFun = isSelected 
        ? s =>  [...s, id]
        : s => s.filter((item) => item !== id);
    setSelectedContacts(updateFun)
  };

  function searchChange(e) {
    const value = e.target.value;
    setSearch(value);
  }

  function renderListOrEmpty() {
    if (visibleContacts.length) {
      return visibleContacts.map((item) => {
        return (
          <ListElement
            key={item.id}
            contact={item}
            setSelected={setSelected}
            selectedContacts={selectedContacts}
            visibleContacts={visibleContacts}
            isSelected={selectedContacts.includes(item.id)}
          />
        );
      });
    } else {
      return <div className="h3"> No contacts </div>;
    }
  }

  return (
    <div className="contaner rounded list_holder">
      <div className="container pt-3 pb-5">
        <header className="container  ">
          <h1 className="h1 ">Contacts</h1>
        </header>
        <label htmlFor="search text-white">Find Contact</label>
        <input
          placeholder="name / last name"
          id="search"
          value={search}
          onChange={(e) => searchChange(e)}
          className="form-control  mx-auto"
        />

        <ul className="mb-5 mt-3 border list-group list">
          {renderListOrEmpty()}
        </ul>
      </div>
    </div>
  );
}
