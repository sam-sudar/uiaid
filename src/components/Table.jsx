import { useState, useEffect, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { getSeatInfo } from "../api/seatInfoApi";

export default function Table() {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch seat data
  useEffect(() => {
    const fetchSeats = async () => {
      try {
        setLoading(true);
        const res = await getSeatInfo();
        setSeats(res.data);
      } catch (err) {
        setError(err.message || "Failed to fetch seat data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "seat_no",
        header: "Seat",
        cell: ({ getValue }) => getValue(),
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ getValue }) => `₹${getValue()}`,
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          const status = getValue();
          return status === "A" ? "Available" : "Booked";
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: seats,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 6,
      },
    },
  });

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <table className="w-full overflow-hidden bg-white rounded-lg border border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="bg-gradient-to-br from-pink-200 via-sky-200 to-blue-300"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 px-4 py-2"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Simple Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <div className="space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
