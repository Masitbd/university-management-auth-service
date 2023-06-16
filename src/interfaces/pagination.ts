import { SortOrder } from 'mongoose';

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder; //string;  we can use 1 or -1 OR asc or dsc
};
