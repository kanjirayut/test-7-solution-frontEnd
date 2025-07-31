import { IUser } from "../infrastructure";

interface ItemCardProps {
  department: string;
  summary: {
    male: number;
    female: number;
    ageRange: string;
    hair: Record<string, number>;
    addressUser: Record<string, string>;
  };
}

export default function ItemCard({ department, summary }: ItemCardProps) {
  return (
    <div
      className="rcorners2"
      style={{
        border: "0.5px solid #000030",
        color: "#000000",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "150px" }}>
        แผนก <span>{department}</span>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", boxSizing: "unset" }}
      >
        <div  style={{ display: "flex"}}>เพศชาย</div>
        <span>{summary.male}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        เพศหญิง <span>{summary.female}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        ช่วงอายุ <span>{summary.ageRange}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        สีผม:
        {Object.entries(summary.hair).map(([color, count]) => (
          <span key={color}>
            {" "}
            {color}:{count}{" "}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        ข้อมูลผู้ใช้:
        {Object.entries(summary.addressUser).map(([name, postal]) => (
          <span key={name}>
            {" "}
            {name}:{postal}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
