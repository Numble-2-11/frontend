import React, { useState, useEffect } from "react";
import Button from "./styled-component/Button.jsx";
import { SignupDes } from "./styled-component/SignupDes.jsx";
import Postcode from "@actbase/react-daum-postcode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Address() {
  const [address, setAddress] = useState("");
  const [possible, setPossible] = useState(false);
  const navigate = useNavigate();

  const selectAddress = (data) => {
    setAddress(data.address);
    console.log(data.address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address) {
      return alert("주소를 입력해주세요.");
    } else {
      axios
        .post("", {
          address: address,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === "success") {
            alert("주소가 등록되었습니다.");
            navigate("/main");
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/main"); // 임시로 메인으로 가게 함
        });
    }
  };

  useEffect(() => {
    if (address) {
      setPossible(true);
    } else if (!address) {
      setPossible(false);
    }
  }, [address]);

  return (
    <>
      <SignupDes>주소를 입력해주세요</SignupDes>
      <Postcode onSelected={selectAddress} autoClose={false} />
      <div style={{ fontSize: "1.5rem", margin: "1.5rem 0" }}>{address}</div>
      <Button onClick={handleSubmit} children={"완료"} possible={possible} />
    </>
  );
}
