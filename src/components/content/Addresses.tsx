import React, { useEffect, useState } from "react";
import "../../styles/addresses.scss";
import search from "../../assets/search_white.svg";
import { useAddressees } from "../../hooks/dataHooks";
import { Address } from "../../types";

export default function Addresses() {
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState(Array<Address>);

  const fetchAddresses = useAddressees(address);

  const getAddresses = async () => {
    const addresses = await fetchAddresses;
    setData(addresses);
  };

  useEffect(() => {
    getAddresses();
  }, [address]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (text.length > 2) setAddress(text);
    else alert("Введите 3 или больше символов");
  };

  return (
    <div className="addresses">
      <span>Поиск адресов</span>
      <p>Введите интересующий вас адрес</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите интересующий вас адрес"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">
          <img src={search} alt=""></img>Поиск
        </button>
      </form>
      {!data.length ? (
        <></>
      ) : (
        <div className="addresses_list">
          <span>Адреса</span>
          {data.map((address: any, index: number) => (
            <div key={index} className="address">
              {address.value
                .replace(/г/, "город")
                .replace(/ул/, "улица")
                .replace(/\sд/, " дом")
                .replace(/обл/, "область")}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
