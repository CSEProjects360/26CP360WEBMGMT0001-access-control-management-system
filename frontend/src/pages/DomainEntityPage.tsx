import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Pagination } from '../components/Pagination';
import { apiRequest } from '../lib/api';
import { PaginatedResponse, defaultPaginationMeta, toPaginatedResponse } from '../lib/pagination';

interface DomainEntityPageProps {
  entity: any;
}

export function DomainEntityPage({ entity }: DomainEntityPageProps) {
  const fields = useMemo(() => (entity.fields || []).filter((field: any) => field.form), [entity]);
  const columns = useMemo(() => (entity.fields || []).filter((field: any) => field.table), [entity]);
  const [items, setItems] = useState<Record<string, any>[]>([]);
  const [form, setForm] = useState<Record<string, string>>({});
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState(defaultPaginationMeta);
  const [error, setError] = useState('');

  const load = async () => {
    const seedRows = Array.isArray(entity.seed) ? entity.seed : [];
    try {
      const payload = await apiRequest<PaginatedResponse<Record<string, any>> | Record<string, any>[]>(
        `/domain/${entity.name}?page=${page}&limit=10`
      );
      const data = toPaginatedResponse(payload, page);
      const rows = data.data.length ? data.data : seedRows;
      setItems(rows);
      setMeta({
        ...data.meta,
        total: rows.length,
        totalPages: Math.max(1, Math.ceil(rows.length / data.meta.limit))
      });
    } catch {
      setItems(seedRows);
      setMeta({
        page,
        limit: 10,
        total: seedRows.length,
        totalPages: Math.max(1, Math.ceil(seedRows.length / 10))
      });
    }
  };

  useEffect(() => {
    setForm({});
    setPage(1);
    void load();
  }, [entity.name]);

  useEffect(() => {
    void load();
  }, [page]);

  const create = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      await apiRequest(`/domain/${entity.name}`, {
        method: 'POST',
        body: JSON.stringify(form)
      });
      setForm({});
      setPage(1);
      await load();
    } catch (e: any) {
      setError(e.message || `Failed to create ${entity.name}`);
    }
  };

  return (
    <section>
      <h2 className="mb-2 text-2xl font-semibold">{entity.page?.title || entity.plural || entity.name}</h2>
      <p className="mb-4 text-sm text-slate-600">{entity.page?.intro || `Manage ${entity.plural || entity.name}.`}</p>
      <form className="mb-4 grid gap-2 md:grid-cols-3" onSubmit={create}>
        {fields.slice(0, 6).map((field: any) => (
          <input
            key={field.name}
            aria-label={field.label}
            className="rounded border px-3 py-2"
            placeholder={field.label}
            value={form[field.name] || ''}
            onChange={(event) => setForm((current) => ({ ...current, [field.name]: event.target.value }))}
            required={Boolean(field.required)}
          />
        ))}
        <button className="rounded bg-primary px-4 py-2 text-white">{entity.page?.createAction || `Add ${entity.name}`}</button>
      </form>
      {error ? <p className="mb-3 text-sm text-red-600">{error}</p> : null}
      <table className="w-full table-auto border-collapse text-left text-sm">
        <thead>
          <tr>
            {(columns.length ? columns : fields).slice(0, 6).map((field: any) => (
              <th key={field.name} className="border-b p-2">{field.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id || JSON.stringify(item)}>
              {(columns.length ? columns : fields).slice(0, 6).map((field: any) => (
                <td key={field.name} className="border-b p-2">{item[field.name] || '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination meta={meta} onPageChange={setPage} />
    </section>
  );
}
