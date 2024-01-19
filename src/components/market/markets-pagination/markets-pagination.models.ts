import { SetStateAction } from "react";

export interface IMarketsPaginationProps {
  page: number;
  totalPages: number;
  setPage: (value: SetStateAction<number>) => void;
}
