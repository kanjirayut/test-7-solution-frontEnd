import axios, { AxiosResponse } from "axios";
import { IUser } from ".";

interface IResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: Number;
}

export class CreateDataFormService {
  public async get(): Promise<IResponse> {
    const response: AxiosResponse<IResponse> = await axios.get<IResponse>(
      "https://dummyjson.com/users"
    );

    // Extract the desired shape
    const { users, total, skip, limit } = response.data;

    return { users, total, skip, limit };
  }
}
