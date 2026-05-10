import { Download, MoreVertical } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface Invoice {
  number: string;
  date: string;
  description: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Failed';
}

const mockInvoices: Invoice[] = [
  {
    number: 'INV-1042',
    date: '2024-03-01',
    description: 'Pro Plan - March 2024',
    amount: 99.00,
    status: 'Paid',
  },
  {
    number: 'INV-1041',
    date: '2024-02-01',
    description: 'Pro Plan - February 2024',
    amount: 99.00,
    status: 'Paid',
  },
  {
    number: 'INV-1040',
    date: '2024-01-01',
    description: 'Pro Plan - January 2024',
    amount: 99.00,
    status: 'Paid',
  },
  {
    number: 'INV-1039',
    date: '2023-12-01',
    description: 'Pro Plan - December 2023',
    amount: 99.00,
    status: 'Paid',
  },
];

const statusVariants = {
  Paid: 'success' as const,
  Pending: 'warning' as const,
  Failed: 'danger' as const,
};

export function InvoiceTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="table-base">
            <thead>
              <tr className="border-b border-[--border]">
                <th className="table-header text-left">Invoice</th>
                <th className="table-header text-left">Date</th>
                <th className="table-header text-left">Description</th>
                <th className="table-header text-right">Amount</th>
                <th className="table-header text-center">Status</th>
                <th className="table-header text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((invoice, idx) => (
                <tr key={idx} className="table-row">
                  <td className="table-cell font-medium text-[--text-primary]">
                    {invoice.number}
                  </td>
                  <td className="table-cell text-[--text-muted]">
                    {invoice.date}
                  </td>
                  <td className="table-cell text-[--text-primary]">
                    {invoice.description}
                  </td>
                  <td className="table-cell text-right font-medium text-[--text-primary]">
                    ${invoice.amount.toFixed(2)}
                  </td>
                  <td className="table-cell text-center">
                    <Badge variant={statusVariants[invoice.status]}>
                      {invoice.status}
                    </Badge>
                  </td>
                  <td className="table-cell text-center">
                    <button className="p-1 hover:bg-[--surface-secondary] rounded transition-colors inline-flex">
                      <Download size={16} className="text-[--primary]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
