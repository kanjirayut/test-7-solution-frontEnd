import { IMain } from "../infrastructure";
export default function ItemCard(data: IMain) {
  return (
    <>
      <div
        className="rcorners1"
        style={{
          border: "0.5px solid #000030",
          color: "#000000",
          padding: "3px",
          margin: "3px",
        }}
      >
        {data.name}
      </div>
    </>
  );
}
