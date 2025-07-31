// src/store/useStore.ts
"use client";
import { create } from "zustand";
import { CreateDataFormService, IUser } from "../infrastructure";
import { groupByDept, DeptSummary } from "../../../utils/groupUsers";

interface CreateDataFormState {
  userList: IUser[];
  grouped: DeptSummary;
  fetchDatas: () => Promise<void>;
}

export const useCreateDataFormStore = create<CreateDataFormState>((set) => ({
  userList: [],
  grouped: {},
  fetchDatas: async () => {
    const service = new CreateDataFormService();
    const resp = await service.get();
    const users = resp.users;

    set({ userList: users });

    const grouped = groupByDept(users);
    console.log(grouped);
    set({ grouped });
  },
}));
