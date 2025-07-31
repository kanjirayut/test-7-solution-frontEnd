import { IMain } from ".";
import { IResponse } from "../../../shared/http";
import { HttpService } from "../../../shared/http/HttpService";

export class MainService extends HttpService {
  public constructor() {
    super("/");
  }

  public get(): Promise<IResponse<IMain[]>> {
    const data = [
      { id: 1, type: "Fruit", name: "Apple" },
      { id: 2, type: "Vegetable", name: "Broccoli" },
      { id: 3, type: "Vegetable", name: "Mushroom" },
      { id: 4, type: "Fruit", name: "Banana" },
      { id: 5, type: "Vegetable", name: "Tomato" },
      { id: 6, type: "Fruit", name: "Orange" },
      { id: 7, type: "Fruit", name: "Mango" },
      { id: 8, type: "Fruit", name: "Pineapple" },
      { id: 9, type: "Vegetable", name: "Cucumber" },
      { id: 10, type: "Fruit", name: "Watermelon" },
      { id: 11, type: "Vegetable", name: "Carrot" },
    ];

    // จำลองการทำงานให้เหมือนกับการดึงข้อมูลจาก API
    return new Promise<IResponse<IMain[]>>((resolve) => {
      // สามารถปรับแต่งตามที่ต้องการ
      resolve({ data: data, status: true, code: 200 });
    });
  }
}
