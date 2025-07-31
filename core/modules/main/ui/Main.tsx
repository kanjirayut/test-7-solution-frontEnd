"use client";
import React, { useEffect } from "react";
import { useMainStore } from "../store";
import ItemCard from "./ItemCard";
import { IMain } from "../infrastructure";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const {
    datas,
    dataFruits,
    dataVegetables,
    addData,
    fetchDatas,
    addFruit,
    addVegetable,
    deleteData,
    deleteFruit,
    deleteVegetable,
    delayDeleteDataFruit,
    delayDeleteDataVegetable,
  } = useMainStore((state) => state);

  useEffect(() => {
    fetchDatas();
  }, [fetchDatas]);

  useEffect(() => {
    if (dataFruits.length > 0) {
      const intervalId = setInterval(() => {
        delayDeleteDataFruit();
      }, 3000);

      // ทำความสะอาดเมื่อ component ถูก unmount หรือทำการ update
      return () => clearInterval(intervalId);
    }
  }, [dataFruits]);

  useEffect(() => {
    if (dataVegetables.length > 0) {
      const intervalId = setInterval(() => {
        delayDeleteDataVegetable();
      }, 3000);

      // ทำความสะอาดเมื่อ component ถูก unmount หรือทำการ update
      return () => clearInterval(intervalId);
    }
  }, [dataVegetables]);

  const handleClickAdd = (data: IMain) => {
    deleteData(data);
    if (data.type === "Fruit") {
      addFruit(data);
    } else {
      addVegetable(data);
    }
  };

  const handleClickDelete = (data: IMain) => {
    if (data.type === "Fruit") {
      deleteFruit(data);
    } else {
      deleteVegetable(data);
    }
    addData(data);
  };

  const router = useRouter(); // ใช้ useRouter hook จาก Next.js

  const handleRedirect = () => {
    router.push("/test2"); // ใช้ router.push() เพื่อเปลี่ยน URL
  };

  return (
    <div className="row" style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <h1 style={{ padding: "10px", color: "#000000" }}>
          Test1: Auto Delete Todo List
        </h1>
        <div>
          <button
            style={{
              border: "1px solid #000000",
              backgroundColor: "#f0f0f0",
              padding: "10px",
              color: "#000000",
              borderRadius: "8px",
              marginRight: "8px",
            }}
            onClick={handleRedirect}
          >
            Test2
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <div style={{ width: "200px" }}>
          {datas.length > 0 ? (
            datas.map((data: any, index: number) => (
              <button key={index} onClick={() => handleClickAdd(data)}>
                <ItemCard {...data} />
              </button>
            ))
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <div style={{ width: "300px", marginTop: "5px" }}>
          <table
            style={{
              width: "100%",
              border: "1px solid #000000",
              color: "black",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderRight: "1px solid #000000" }}>Fruit</th>
              </tr>
            </thead>
            <tbody>
              {dataFruits.length > 0 ? (
                dataFruits.map((dataFruit: any, indexFruit: number) => (
                  <tr key={indexFruit}>
                    <th style={{ borderRight: "1px solid #000000" }}>
                      <button onClick={() => handleClickDelete(dataFruit)}>
                        <ItemCard {...dataFruit} />
                      </button>
                    </th>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ width: "300px", marginTop: "5px" }}>
          <table
            style={{
              width: "100%",
              border: "1px solid #000000",
              color: "black",
            }}
          >
            <thead>
              <tr>
                <th>Vegetable</th>
              </tr>
            </thead>
            <tbody>
              {dataVegetables.length > 0 ? (
                dataVegetables.map(
                  (dataVegetable: any, indexVegetable: number) => (
                    <tr key={indexVegetable}>
                      <th style={{ borderRight: "1px solid #000000" }}>
                        <button
                          onClick={() => handleClickDelete(dataVegetable)}
                        >
                          <ItemCard {...dataVegetable} />
                        </button>
                      </th>
                    </tr>
                  )
                )
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
