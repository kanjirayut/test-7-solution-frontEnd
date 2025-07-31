"use client";
import React, { useEffect } from "react";
import { useCreateDataFormStore } from "../store";
import ItemCard from "./ItemCard";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const { userList, grouped, fetchDatas } = useCreateDataFormStore(
    (state) => state
  );

  useEffect(() => {
    fetchDatas();
  }, [fetchDatas]);
  const router = useRouter(); // ใช้ useRouter hook จาก Next.js

  const handleRedirect = () => {
    router.push("/"); // ใช้ router.push() เพื่อเปลี่ยน URL
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
          Test2: Create data from API
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
            Test1
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
          {Object.keys(grouped).length > 0 ? (
            Object.keys(grouped).map((department) => (
              <div key={department}>
                <ItemCard
                  department={department}
                  summary={grouped[department]}
                />
              </div>
            ))
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </div>
  );
}
