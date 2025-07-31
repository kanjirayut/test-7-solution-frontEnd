// src/store/useStore.ts
"use client";
import { create } from "zustand";
import { IMain, MainService } from "../infrastructure";

interface MainState {
  datas: IMain[];
  dataFruits: IMain[];
  dataVegetables: IMain[];
  fetchDatas: () => void;
  addData: (data: IMain) => void;
  addFruit: (data: IMain) => void;
  addVegetable: (data: IMain) => void;
  deleteData: (data: IMain) => void;
  deleteFruit: (data: IMain) => void;
  deleteVegetable: (data: IMain) => void;
  delayDeleteDataFruit: () => void;
  delayDeleteDataVegetable: () => void;
}

export const useMainStore = create<MainState>((set) => ({
  datas: [],
  dataFruits: [],
  dataVegetables: [],
  fetchDatas: async () => {
    const service = new MainService();
    const response = await service.get();
    const data = response;
    set({ datas: data.data });
  },
  addData: (data: IMain) => {
    set((state) => ({
      datas: [...state.datas, data], // เพิ่ม fruit ลงใน array
    }));
  },
  addFruit: (data: IMain) => {
    set((state) => ({
      dataFruits: [...state.dataFruits, data], // เพิ่ม fruit ลงใน array
    }));
  },
  addVegetable: (data: IMain) => {
    set((state) => ({
      dataVegetables: [...state.dataVegetables, data], // เพิ่ม fruit ลงใน array
    }));
  },
  deleteData: (data: IMain) => {
    set((state) => ({
      datas: state.datas.filter((e) => e.id !== data.id),
    }));
  },
  deleteFruit: (data: IMain) => {
    set((state) => ({
      dataFruits: state.dataFruits.filter((e) => e.id !== data.id),
    }));
  },
  deleteVegetable: (data: IMain) => {
    set((state) => ({
      dataVegetables: state.dataVegetables.filter((e) => e.id !== data.id),
    }));
  },
  delayDeleteDataFruit: () => {
    set((state) => ({
      datas: [...state.datas, state.dataFruits[0]], // เพิ่ม fruit ลงใน array
    }));
    set((state) => {
      const newDataFruits = [...state.dataFruits];
      newDataFruits.shift();
      return { dataFruits: newDataFruits };
    });
  },
  delayDeleteDataVegetable: () => {
    set((state) => ({
      datas: [...state.datas, state.dataVegetables[0]], // เพิ่ม fruit ลงใน array
    }));
    set((state) => {
      const newDataVegetables = [...state.dataVegetables];
      newDataVegetables.shift();
      return { dataVegetables: newDataVegetables };
    });
  },
}));
