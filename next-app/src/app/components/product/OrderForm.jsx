"use client";
import { useMemo, useRef, useState } from "react";
// Adjust the path to where you keep the products list:
import products from "../../../../public/data/orderProducts";

export default function OrderForm() {
  const [draftId, setDraftId] = useState("");
  const [draftQty, setDraftQty] = useState(1);
  const [items, setItems] = useState([]);

  const textRef = useRef(null);

  const selected = useMemo(
    () => products.find((p) => p.id === draftId),
    [draftId]
  );

  const addItem = () => {
    const qty = Math.max(1, parseInt(draftQty || 0, 10));
    if (!selected) {
      alert("Επίλεξε προϊόν.");
      return;
    }
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === selected.id);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], quantity: next[i].quantity + qty };
        return next;
      }
      return [
        ...prev,
        { id: selected.id, desc: selected.desc, unit: selected.unit, quantity: qty },
      ];
    });
    setDraftQty(1);
    setDraftId("");
  };

  const removeItem = (id) => setItems((prev) => prev.filter((x) => x.id !== id));
  const updateQty = (id, q) =>
    setItems((prev) =>
      prev.map((x) =>
        x.id === id ? { ...x, quantity: Math.max(0, parseInt(q || 0, 10)) } : x
      )
    );

  const handleSubmit = (e) => {
    if (items.length === 0) {
      e.preventDefault();
      alert("Πρόσθεσε τουλάχιστον 1 προϊόν.");
      return;
    }
    const textLines = items
      .map((p) => `• ${p.desc} | ${p.unit} | Ποσότητα: ${p.quantity}`)
      .join("\n");
    if (textRef.current) textRef.current.value = textLines;
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="title-teal mb-6">Παραγγελία Προϊόντων</h2>

      {/* Builder row */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_160px_160px] md:items-end">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Προϊόν</label>
            <select
              value={draftId}
              onChange={(e) => setDraftId(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
              aria-label="Επιλογή προϊόντος"
            >
              <option value="">— επίλεξε προϊόν —</option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.desc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Ποσότητα</label>
            <input
              type="number"
              min="1"
              step="1"
              value={draftQty}
              onChange={(e) => setDraftQty(e.target.value)}
              className="w-full md:w-28 p-2 rounded border border-gray-300"
              aria-label="Ποσότητα"
            />
          </div>

          <button onClick={addItem} className="btn w-full md:w-auto">
            Προσθήκη
          </button>
        </div>

        {/* Auto details preview */}
        {selected && (
          <div className="mt-6 flex items-center gap-4">
            <div className="w-28 h-20 md:w-32 md:h-24 bg-gray-50 rounded overflow-hidden">
              <img
                src={selected.image || "logo/4.png"}
                alt={selected.desc}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-sm">
              <div className="font-semibold">{selected.desc}</div>
              <div className="text-gray-600">Μονάδα: {selected.unit}</div>
            </div>
          </div>
        )}
      </div>

      {/* Items list — mobile cards + desktop table (unchanged) */}
      {items.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
          <h3 className="font-semibold mb-4">Επιλογές</h3>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {items.map((it) => (
              <div
                key={it.id}
                className="border border-gray-200 rounded-xl p-3 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="font-semibold truncate">{it.desc}</div>
                  <div className="text-gray-600 text-xs">Μονάδα: {it.unit}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={it.quantity}
                    onChange={(e) => updateQty(it.id, e.target.value)}
                    className="w-20 p-2 rounded border border-gray-300"
                    aria-label={`Ποσότητα για ${it.desc}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(it.id)}
                    className="text-red-600 hover:underline"
                    aria-label={`Αφαίρεση ${it.desc}`}
                  >
                    Αφαίρεση
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
              <tr className="text-left text-gray-600">
                <th className="py-2 pr-4">Προϊόν</th>
                <th className="py-2 pr-4">Μονάδα</th>
                <th className="py-2 pr-4">Ποσότητα</th>
                <th className="py-2"></th>
              </tr>
              </thead>
              <tbody>
              {items.map((it) => (
                <tr key={it.id} className="border-t">
                  <td className="py-2 pr-4">{it.desc}</td>
                  <td className="py-2 pr-4">{it.unit}</td>
                  <td className="py-2 pr-4">
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={it.quantity}
                      onChange={(e) => updateQty(it.id, e.target.value)}
                      className="w-24 p-2 rounded border border-gray-300"
                      aria-label={`Ποσότητα για ${it.desc}`}
                    />
                  </td>
                  <td className="py-2 text-right">
                    <button
                      type="button"
                      onClick={() => removeItem(it.id)}
                      className="text-red-600 hover:underline"
                    >
                      Αφαίρεση
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Netlify form */}
      <form
        name="order-request"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you"
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        <input type="hidden" name="form-name" value="order-request" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        {/* Only the text payload now */}
        <input ref={textRef} type="hidden" name="Σύνοψη_Παραγγελίας:" />

        {/* Customer info */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="font-semibold mb-4">Στοιχεία Πελάτη</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="Όνομα"
              placeholder="Όνομα"
              required
              className="p-2 rounded border border-gray-300"
            />
            <input
              type="text"
              name="Επώνυμο"
              placeholder="Επώνυμο"
              required
              className="p-2 rounded border border-gray-300"
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <input
              type="tel"
              name="Τηλέφωνο"
              required
              placeholder="Τηλέφωνο"
              className="p-2 rounded border border-gray-300"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="p-2 rounded border border-gray-300"
            />
          </div>

          <textarea
            name="Μήνυμα / Σχόλιο"
            rows={4}
            placeholder="Μήνυμα / Σχόλιο"
            className="mt-4 w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
          <button type="submit" className="btn w-full sm:w-auto">
            Αποστολή Παραγγελίας
          </button>
        </div>
      </form>
    </section>
  );
}
