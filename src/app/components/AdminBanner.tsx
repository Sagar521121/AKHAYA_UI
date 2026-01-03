import { useState } from 'react';
import { seedApi } from '../services/api';
import { Database, CheckCircle, XCircle } from 'lucide-react';

export function AdminBanner() {
  const [seeding, setSeeding] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [dismissed, setDismissed] = useState(false);

  const handleSeed = async () => {
    setSeeding(true);
    try {
      const response = await seedApi.seedDatabase();
      setResult({ success: true, message: response.message });
    } catch (error) {
      setResult({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to seed database' 
      });
    } finally {
      setSeeding(false);
    }
  };

  if (dismissed) {
    return null;
  }

  return null;
}