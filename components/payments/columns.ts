import type { ColumnDef } from "@tanstack/vue-table";
import DropdownAction from "./DataTableDropdown.vue";
import { ArrowUpDown, ChevronDown } from "lucide-vue-next";
import { Button } from "../ui/button";

// This type is used to define the shape of our data.
export interface Payment {
  id: string;
  amount: number;
  houseNumber: string;
  phoneNumber: string;
  date: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Transaction ID",
  },
  {
    accessorKey: "houseNumber",
    header: "House Number",
    cell: ({ row }) => {
      return h(
        "div",
        { class: "font-semibold uppercase" },
        row.getValue("houseNumber")
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      }).format(amount);

      return h("div", { class: "font-semibold" }, formatted);
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Date", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const formatted = quickFormat(row.getValue("date"));
      console.log("Formatted Date", formatted);
      return h("div", { class: "lowercase" }, formatted);
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return h(
        "div",
        { class: "relative" },
        h(DropdownAction, {
          payment,
        })
      );
    },
  },
];
