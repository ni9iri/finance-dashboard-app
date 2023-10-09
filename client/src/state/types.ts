export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  expenses: number;
  month: string;
  nonOperationalExpenses: number;
  operationalExpenses: number;
  revenue: number;
}

export interface Day {
  id: string;
  date: string;
  expenses: number;
  revenue: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalExpenses: number;
  totalRevenue: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  expensesByCategory: ExpensesByCategory;
  createdAt: string;
  updatedAt: string;
}
