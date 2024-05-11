import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

export default function OrderTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <RowContent />
        <RowContent />
        <RowContent />
        <RowContent />
        <RowContent />
        <RowContent />
        <RowContent />
      </TableBody>
    </Table>
  );
}

function RowContent() {
  return (
    <TableRow>
      <TableCell>
        <p>Liam Johnson</p> <small>liam@example.com</small>
      </TableCell>
      <TableCell>
        <p>Sale</p>
      </TableCell>
      <TableCell>
        <p>Fullfilled</p>
      </TableCell>
      <TableCell>
        <p>2023-06-23</p>
      </TableCell>
      <TableCell>
        <p>$250.00</p>
      </TableCell>
    </TableRow>
  );
}
