"use client";

import { useEffect, useMemo, useRef, useState } from "react";
// Bilingual product lists (update your data file accordingly):
import { products_el, products_en } from "../../../../public/data/orderProducts";

/* -------------------- OrderItemCard -------------------- */
export default function OrderItemCard({ item, qty, onQtyChange, locale = "el" }) {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white flex flex-col">
      <div className="w-full h-40 bg-gray-50">
        <img
          src={item.image ? item.image : "logo/4.png"}
          alt={item.desc}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col gap-3">
        <div className="text-sm text-gray-500">{item.unit}</div>
        <div className="font-semibold leading-snug">{item.desc}</div>

        <div className="mt-auto">
          <label className="text-sm text-gray-600">
            {locale === "en" ? "Quantity" : "Ποσότητα"}
          </label>
          <input
            type="number"
            min="0"
            step="1"
            value={qty}
            onChange={(e) => onQtyChange(item.id, e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
        </div>
      </div>
    </div>
  );
}