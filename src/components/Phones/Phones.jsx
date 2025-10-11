import { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffectJ(()=>{
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  })

  return <div></div>;
};

export default Phones;
