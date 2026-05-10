import { useState } from 'react';
import { PlanCard } from '../components/billing/PlanCard';
import { InvoiceTable } from '../components/billing/InvoiceTable';
import { UsageMeter } from '../components/billing/UsageMeter';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Billing() {
  const [billingCycle, setBillingCycle] = useState<'mo' | 'yr'>('mo');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-display text-[--text-primary]">
          Billing & Plans
        </h1>
        <p className="text-[--text-muted] mt-2">
          Manage your subscription and billing settings.
        </p>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex gap-2 bg-[--surface-secondary] p-1 rounded-lg w-fit">
        <button
          onClick={() => setBillingCycle('mo')}
          className={`px-4 py-2 rounded transition-all ${
            billingCycle === 'mo'
              ? 'bg-[--primary] text-white'
              : 'text-[--text-muted] hover:text-[--text-primary]'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('yr')}
          className={`px-4 py-2 rounded transition-all ${
            billingCycle === 'yr'
              ? 'bg-[--primary] text-white'
              : 'text-[--text-muted] hover:text-[--text-primary]'
          }`}
        >
          Yearly (Save 20%)
        </button>
      </div>

      {/* Plans */}
      <div>
        <h2 className="text-2xl font-semibold font-display text-[--text-primary] mb-4">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlanCard
            name="Starter"
            price={29}
            billing={billingCycle}
            features={[
              '500K tokens/month',
              'Up to 2 team seats',
              'Community support',
              'API access',
              'Basic analytics',
            ]}
            buttonLabel="Upgrade"
          />
          <PlanCard
            name="Pro"
            price={99}
            billing={billingCycle}
            features={[
              '5M tokens/month',
              'Up to 10 team seats',
              'Priority support',
              'Advanced API access',
              'Custom integrations',
              'Advanced analytics',
            ]}
            isCurrent
            buttonLabel="Current Plan"
          />
          <PlanCard
            name="Enterprise"
            price={499}
            billing={billingCycle}
            features={[
              'Unlimited tokens',
              'Unlimited team seats',
              'Dedicated support',
              'Custom integrations',
              'Advanced security',
              'SLA guarantee',
            ]}
            buttonLabel="Contact Sales"
          />
        </div>
      </div>

      {/* Usage Meters */}
      <UsageMeter />

      {/* Invoice History */}
      <InvoiceTable />

      {/* Payment Method */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold font-display text-[--text-primary] mb-4">
          Payment Method
        </h2>
        <div className="flex items-center justify-between p-4 bg-[--surface-secondary] rounded-lg border border-[--border]">
          <div>
            <p className="text-[--text-primary] font-medium">
              •••• •••• •••• 4242
            </p>
            <p className="text-sm text-[--text-muted] mt-1">
              Visa • Expires 12/27
            </p>
          </div>
          <Button variant="secondary" size="sm">
            Update Card
          </Button>
        </div>
      </Card>
    </div>
  );
}
